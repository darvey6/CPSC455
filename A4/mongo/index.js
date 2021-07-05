const connectionString = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.hqtkd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mongoose = require("mongoose")

mongoose.connect(connectionString, {useNewUrlParser: true})

mongoose.connection.on("error", function(error) {
    console.log(error)
})

mongoose.connection.on("open", function() {
    console.log("Connected to MongoDB database.")
})