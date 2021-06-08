const express = require('express')
const API = require('./API/API')
const path = require("path")
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(API)

// Static assets served by Heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
  
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})