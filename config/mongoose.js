// require the library
const mongoose = require("mongoose");
// connect to the database
mongoose.connect("mongodb://localhost/to_do_list_db");
// aquire the connection (to check if it is successful)
const db = mongoose.connection;

// error handling
db.on("error", console.error.bind(console, "error connecting to db"));
// up and running then print the message
db.once("open", function () {
  console.log("successfully connected to the database");
});

// exporting the database
module.exports = db;
