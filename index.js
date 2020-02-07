const express = require('express')
const app = express()
const cloudinary = require('cloudinary').v2
const bodyParser = require('body parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


cloudinary.config({
    cloud_name: dy5bs7nmh,
    API_KEY: 448396895414434,
    API_SECRET: YaDxuVrdu-esJJp5aY8BkU99eLA
}) 


api.get('/', (req,res) => {
    res.json({
        message: "Hello world"
    })
})

api.post('image_upload', (req,res) => {

})