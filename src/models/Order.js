( function () {
	'use strict';

var Mongoose = require( 'mongoose' );

var OrderSchema = new Mongoose.Schema( {
	'product'    : { 'type' : String, 'required' : true },
	'cost'       : { 'type' : Number, 'required' : true },
	'quantity'   : { 'type' : Number, 'required' : true },
	'total'      : { 'type' : Number, 'required' : true },
	'customerId' : { 'type' : Mongoose.Schema.Types.ObjectId, 'ref' : 'customers' }
} );

OrderSchema.post( 'save', function ( next ) {
	var Customer = Mongoose.model( 'Customer' );

	var conditions = {
		'_id' : this.customerId
	};
	var options = {
		'upsert' : true
	};

	var update = {
		'$push' : {
			'orders' : this._id
		}
	};

	Customer.update( conditions, update, options, function ( err ) {
		if ( err ) {
			throw new Error( err );
		}
	} );
} );

Mongoose.model( 'Order', OrderSchema );

} () );
