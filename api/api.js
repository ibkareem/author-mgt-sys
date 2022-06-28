
const express = require('express');
const DB = require('../model/database')


const api = express();
api.use(express.json())

api.get('/api', async(req, res) => {
    try {
        res.json(JSON.parse(await DB.read()));
    } catch (error) {
        res.status(404).json({"message": "Database Not Found"});
    }
})

api.post('/api', async(req, res)=>{
    var status = await DB.write(req.body);
    res.json(status);
})

api.put('/api', async(req, res)=>{
    var status = DB.update(req.query.id, req.body);
})

module.exports = api