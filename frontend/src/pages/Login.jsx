import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const navigate = useNavigate()

const login = async(e)=>{

e.preventDefault()

const res = await axios.post("http://localhost:5000/api/auth/login",{
email,
password
})

localStorage.setItem("token",res.data.token)

navigate("/dashboard")

}

return(

<div>

<h2>Login</h2>

<form onSubmit={login}>

<input
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button>Login</button>

</form>

</div>

)

}

export default Login