var mongoose = require('mongoose');

// Defining schema
var Schema = mongoose.Schema;

var BookSchema = new Schema({
	title: { type: String, required: [true, 'Books without title goes to the trashcan'] },
	author: { type: Schema.ObjectId, ref: 'Author', required: [true, 'This library does not accept phantom writers'] },
	summary: { type: String, required: [true, 'Books without tl;dr deserve to go into the trashcan']},
	isbn: { type: String, required: true},
	genre: [ {type: Schema.ObjectId, ref: 'Genre'}]	
});

BookSchema
.virtual('url')
.get(function(){
	return '/catalog/book/' + this._id;
});

module.exports = mongoose.model('Book',BookSchema);
