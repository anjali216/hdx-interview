const express = require('express'); 
const dotenv = require('dotenv');    
const cors = require('cors');
const projectRoutes = require('./routes/projectRoutes'); // Import your routes

dotenv.config(); // Initialize environment variables 

const app = express(); // 3. INITIALIZE APP (This fixes your error)

// Middleware [cite: 53]
app.use(cors());
app.use(express.json()); // Essential for parsing JSON bodies

// Routes [cite: 15]
// Move your route usage BELOW the 'const app = express()' line
app.use("/api/projects", projectRoutes); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});