const express = require('express')
const API = require('./API/API')
const path = require("path")
const app = express()
var request = require('request')

const PORT = process.env.PORT || 3001;

redirectUri = process.env.REDIRECT_URI;
clientId = process.env.CLIENT_ID;
clientSecret = process.env.CLIENT_SECRET

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.get('/test', (req, res) => {
  res.send('Hello World!')
})

app.post("/login", (req, res) => {

})

app.use(API)

// Static assets served by Heroku

  
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})