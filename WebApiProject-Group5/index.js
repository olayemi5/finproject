const express = require('express');
const bodyParser = require('body-parser')
const cors = require("cors");
const authRoutes = require('./src/auth/authRoutes')

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(authRoutes);

app.get("/", (req, res) =>{
    res.send("Web api group five");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`app started on port ${PORT}`)
});
