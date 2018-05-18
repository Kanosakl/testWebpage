var createError = require('http-errors');
var express = require('express');
var mongoose = require('mongoose');

// MongooseDB setup
var mongoDB = 'mongodb://testUser:1@ds123500.mlab.com:23500/dblocallibrary'
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
// Get the default connection
var db = mongoose.connection;

// Bind connection to error event (to get notifcation of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Defining schema
var Schema = mongoose.Schema;

var bookSchema = new Schema({
	title: { String, required: [true, 'Books without title goes to the trashcan' },
	author: { authorSchema[1], required: true },
	summary: String,
	ISBN: { String, required: true, unique: true },
	genre: [genreSchema],
	url: String
});

var authorSchema = new Schema({
	first_name: String,
	family_name: String,
	date_of_birth: Date,
	date_of_death: Date,
	
	name: String,
	lifespan: String,
	url: String
});

var bookInstanceSchema = new Schema({
	book: [Book],
	imprint: String,
	status: enum,
	due_back: Date,
	url: String
});

var genreSchema = new Schema({
	name: String,
	url: String
});

module.exports = mongoose;
