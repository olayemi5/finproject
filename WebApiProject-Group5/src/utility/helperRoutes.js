const express = require('express')
const pool = require("../config/db");

const router = express.Router()

router.post('/revocerpassword'), async (req, res) => {
    const { email, password } = req.body;

}