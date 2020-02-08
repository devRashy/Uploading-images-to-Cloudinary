const express = require("express");
const app = express();
const cloudinary = require("cloudinary").v2;
const bodyParser = require('body-parser');
require('dotenv').config()

// body parser configuration
app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

app.get("/", (req, res, next) => {
  res.json({ message: "Hey! This is your server response!" });
  next();
});

// image upload API
app.post("/image-upload", (req, res) => {
    // collected image from a user
    const data = {
      image: req.body.image,
    }

    // upload image here
    cloudinary.uploader.upload(data.image)
    .then((result) => {
      res.status(200).send({
        message: "success",
        result,
      });
    }).catch((error) => {
      res.status(500).send({
        message: "failure",
        error,
      });
    });
});

app.listen(4000,() => {
    console.log('your app is running on port 4000')
})