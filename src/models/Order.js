( function () {
	'use strict';

var mongoose = require( 'mongoose' );

var orderSchema = mongoose.Schema( {
	'product'  : { 'type' : String, 'required' : true },
	'cost'     : { 'type' : Number, 'required' : true },
	'quantity' : { 'type' : Number, 'required' : true },
	'total'    : { 'type' : Number, 'required' : true },
	'customer' : { 'type' : mongoose.Schema.Types.ObjectId, 'ref' : 'customers' }
} );

mongoose.model( 'orders', orderSchema );

module.exports = mongoose.model( 'orders' );

} () );
