const express = require("express")
const app = express()

//req = request, res = response

//Middleware
app.use(express.json()) //Looks for a request body, and turns it into 'req.body'
app.use("/items", (req, res, next) => {
    console.log("THE ITEMS MIDDLEWARE WAS EXECUTED")
    next()
})
app.use("/items", (req, res, next) => {
    req.body = {name: "Rick"}
    console.log("THE ITEMS MIDDLEWARE WAS EXECUTED AGAIN")
    next()
})

app.use("/todos", require("./routes/todoRouter.js"))

app.listen(3000, () => {
    console.log("The server is running on Port 3000")
})