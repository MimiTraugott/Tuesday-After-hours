// how do we start an index.js and how do we import
require('dotenv').config()
const express = require('express')
const { SERVER_PORT } = process.env
const app = express()
const pc = require('./postCtrl')

app.use(express.json())
///all of our endpoints will go here/////

app.get('/api/dash', pc.getAllPosts)
app.post('/api/addpost', pc.addPost)
app.put('/api/edit/:id', pc.editPost)
app.put('/api/delete/:id', pc.deletePost)
app.listen(SERVER_PORT, (`${SERVER_PORT} is listening`))