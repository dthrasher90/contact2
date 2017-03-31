var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Contact schema
var ContactSchema = new Schema({
	id: String,
	firstname: String,
	lastname: String,
	email: String,
  phone: Number,
});


var ContactModel = mongoose.model('Contact', ContactSchema);

module.exports = ContactModel;

//save id to database and access it in angular
//contact.id
