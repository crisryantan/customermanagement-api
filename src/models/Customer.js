( function () {
	'use strict';

var Mongoose = require( 'mongoose' );

var CustomerSchema = new Mongoose.Schema( {
	'joined'     : { 'type' : Date, 'required' : true, 'default' : '01/01/1900' },
	'fname'      : { 'type' : String, 'required' : true, 'default' : '' },
	'lname'      : { 'type' : String, 'required' : true, 'default' : '' },
	'city'       : { 'type' : String, 'required' : true, 'default' : '' },
	'orderTotal' : { 'type' : Number },
	'orders'     : [ { 'type' : Mongoose.Schema.Types.ObjectId, 'ref' : 'orders' } ]
} );

Mongoose.model( 'Customer', CustomerSchema );

} () );
