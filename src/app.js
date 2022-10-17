const express = require('express');
const port = 8000;
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const hbs = require('hbs');
const Detail = require('./models/detail');
const Slider = require('./models/Slider');

const routes = require('./routes/main')

app.use('/static',express.static('public'));
app.use(routes);

app.set('view engine','hbs');
app.set("views","views");
hbs.registerPartials("views/partials");



//mongoose connection
mongoose.connect("mongodb://localhost/company_website", () => {
    console.log("Mongo Db Connected");

    Slider.create([
        {
            title: "Learn Java is very easy language",
            subTitle:'Java is one of the most popular language',
            imageUrl:"/static/images/pic1.jpg"
        },
        {
            title: "What is Django in python?",
            subTitle:'Django is best framework of pyhon language',
            imageUrl:"/static/images/pic1.jpg"
        },
        {
            title: "Learn Java is very easy language",
            subTitle:'Java is one of the most popular language',
            imageUrl:"/static/images/pic1.jpg"
        },
    ])
    // Detail.create({
    //     brandName: "Om Printers and Traders",
    //     brandIconUrl: "https://t3.ftcdn.net/jpg/04/23/48/70/360_F_423487079_9mCRfpv2NzdZhtyVQer3XWBvWtW7ppvo.jpg",
    //     links: [
    //         {
    //             label:"Home",
    //             url:  "/"
    //         },
    //         {
    //             label:"Services",
    //             url:"/services"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"Contact Us",
    //             url:"/contact-us"
    //         }
    //     ]
    // })
})


app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
})