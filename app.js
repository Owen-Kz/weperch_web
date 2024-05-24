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
app.set("view engine", "ejs");

app.set('views', path.join(__dirname, 'views'))
// app.set("views", ["./views"]);

app.use("/css", express.static(__dirname + "/public/css", { type: 'text/css' }))
app.use("/js", express.static(__dirname + "/public/js", { type: 'text/javascript' }))
app.use("/vendor", express.static(__dirname + "/public/vendor", {type: 'text/javacript'}))
app.use("/js/bootstrap", express.static(__dirname + "/public/js/bootstrap/dist/js", {type:"text/javascript"}))

// app.use("/css/icons/font-awesome/css/", express.static(__dirname + "/public/css/icons/font-awesome/css/", {type : 'text/css'}))
app.use("/files", express.static(__dirname + "/public/files", {type: 'text/folder'}))
app.use("/files/images", express.static(__dirname + "/public/files/images", {type: 'file/image'}))
app.use("/userUploads/Audio", express.static(__dirname + "/public/userUpload/audio", {type:'file/media'}))
app.use("/userUploads/Videos", express.static(__dirname + "/public/userUpload/videos", {type:'file/media'}))
app.use("/userUploads/profileImages", express.static(__dirname + "/public/userUpload/profilePhotos", {type:'file/images'}))
app.use("/userUploads/profileCovers", express.static(__dirname +"/public/userUpload/profileCovers", {type:'file/images'}))
// app.use("/userUploads/spaceCovers", express.static(__dirname +"/public/userUpload/spaceCovers", {type:'file/images'}))


app.use("/", require("./routes/pages"))


app.listen(portN)
console.log(`Server running on ${portN}`)

module.exports = app
// module.exports = io