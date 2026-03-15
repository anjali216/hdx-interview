import React, { useEffect, useState } from "react";
import axios from "axios";

function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/projects");
        setProjects(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();

  }, []);

  return (
    <div>
      <h2>Projects</h2>

      {projects.map((project) => (
        <div key={project._id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}

    </div>
  );
}

export default Projects;