const express = require('express')
const dotenv = require("dotenv").config();
const path = require('path');
const bodyParser = require('body-parser')
const portN = process.env.PORT

const app = express()
// const server = require("http").Server(app)
const cookie = require("cookie-parser");
// const io = require("socket.io")(server, {
//     port: 1487 // Change this to your desired port number
// })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));
app.use(cookie());
app.use(express.json());

// connectToDatabase()
// io.on('connection', onConnected);
app.set('views', path.join(__dirname, 'views'))
// app.set("view engine", "ejs");
app.set("views", ["./views"]);
app.use("/", require("./routes/pages"))


app.listen(portN)
console.log(`Server running on ${portN}`)

module.exports = app
// module.exports = io