( function () {
	'use strict';

var mongoose = require( 'mongoose' );

var customerSchema = mongoose.Schema( {
	'joined'     : { 'type' : String, 'required' : true },
	'fname'      : { 'type' : String, 'required' : true },
	'lname'      : { 'type' : String, 'required' : true },
	'city'       : { 'type' : String, 'required' : true },
	'orderTotal' : Number,
	'orders'     : [
		{
			'product'  : String,
			'cost'     : Number,
			'quantity' : Number,
			'total'    : Number
		}
	]
} );

mongoose.model( 'customers', customerSchema );

module.exports = mongoose.model( 'customers' );

} () );
