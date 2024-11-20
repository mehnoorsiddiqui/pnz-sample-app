// Import the dependencies
const express = require("express");
const cors = require('cors');
const api = require('./Router/api')

// Create an express server
const app = express();
const port = process.env.PORT || 8080;

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// app.use(express.static(process.cwd() + "/build/"));

// //CORS
// app.use(cors({ credentials: true, origin: true }));
app.use(cors({
    origin: 'http://localhost:3000', // Allow this origin to make requests
    credentials: true
  }));
//Authentication flow of pnz api
app.use("/api", api);

// app.get('/', (req, res) => {
//     res.sendFile(process.cwd() + "/build/index.html");
// });

// app.get('/callback', (req, res) => {
//     res.sendFile(process.cwd() + "/build/index.html");
// });

// Start the server
app.listen(port, () => console.log(`SERVER LISTENING AT PORT ${port}`));