const jwt = require('jsonwebtoken');
const db = require("../config/db");

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).send({ error: 'You must be logged in.' })

    const token = authorization.replace('Bearer ', '');

    jwt.verify(token, 'GroupFive', async (err, payload) => {
        if (err) return res.status(401).send({ error: 'You must be logged in.' })

        const { userId } = payload;

        const user = await db.query(`SELECT * FROM siteusers WHERE id=${userId}`).catch(console.log);
        
        req.user = user;
        next();
    })
}