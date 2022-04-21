const express = require('express')
const app = express()
const port = 3000
const cookieParser = require('cookie-parser');

app.use(cookieParser())
app.use(express.raw());
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const route = require("./route/defult")

app.use("/",route);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})