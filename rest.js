var http = require('http')
var fs = require('fs')

const express = require('express')
var bodyParser = require('body-parser')

const PORT = 8080;

const app = express()
// app.use(bodyParser.urlencoded({ extended: false}))
// app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>")
})

app.get("/two", (req, res) => {
    res.send("<h5>Man Reference</h5>")
})

app.get("/three", (req, res) => {
    res.send("<h5>Page 3</h5>")
})

app.get("/four", (req, res) => {
    res.send("<h2>Page 4</h2>")
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});