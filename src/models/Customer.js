( function () {
	'use strict';

var mongoose = require( 'mongoose' );

var customerSchema = mongoose.Schema( {
	'joined'     : { 'type' : Date, 'required' : true, 'default' : '01/01/1900' },
	'fname'      : { 'type' : String, 'required' : true, 'default' : '' },
	'lname'      : { 'type' : String, 'required' : true, 'default' : '' },
	'city'       : { 'type' : String, 'required' : true, 'default' : '' },
	'orderTotal' : { 'type' : Number },
	'orders'     : [ { 'type' : mongoose.Schema.Types.ObjectId, ref: 'orders' } ]
} );

mongoose.model( 'customers', customerSchema );

module.exports = mongoose.model( 'customers' );

} () );
