var  mongoose = require("mongoose")

var menuSchema = mongoose.Schema({
   newMenu : {type: Array}
})

module.exports = mongoose.model("menu", menuSchema)
