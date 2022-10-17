const express = require('express');

const routes = express.Router();
const Detail = require('../models/detail');

console.log("Router loaded");

routes.get('/', async (req,res) => {
    const details = await Detail.findOne({"_id":"633d209050a2227e3e23d912"});
    // console.log(details);
    res.render('index',{
        details:details
    });
});

routes.get('/gallery', async (req,res) => {
    const details = await Detail.findOne({"_id":"633d209050a2227e3e23d912"});
    res.render('gallery',{
        details:details
    });
})

module.exports = routes;