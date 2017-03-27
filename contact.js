var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// TODO schema
var ContactSchema = new Schema({
	firstname: String,
	lastname: String,
	email: String,
  phone: Number,
});


var ContactModel = mongoose.model('Contact', ContactSchema);

module.exports = ContactModel;