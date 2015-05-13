( function () {
'use strict';

var schema   = require( '../models/Customer' );
var mongoose = require( 'mongoose' );
var ObjectId = mongoose.Types.ObjectId;

exports.displayCustomers = function( request, reply ) {
	schema.customers.find( {}, function ( err,customers ) {
		if ( err ) return reply ( {
			'statusCode' : '404',
			'error'      : 'Error finding customers'
		} );
		reply( customers );
	} );
};

exports.addCustomer = function( request, reply ) {
	new schema.customers( {}, { versionKey: false } );
	var newCustomer = new schema.customers( {
		joined : request.payload.joined,
		fname  : request.payload.fname,
		lname  : request.payload.lname,
		city   : request.payload.city,
	} )
	newCustomer.save( function ( err, customer ) {
		if ( err ) return reply( {
			'statusCode' : '500',
			'error'      : err,
			'message'    : 'Error creating customer'
		} );
		reply( customer )
	} );
};

exports.getAllOrders = function ( request, reply ) {
	var orders = [];
	schema.customers.find( {}, function ( err,customers ) {
		if ( err ) return reply( {
			'statusCode' : '404',
			'error'      : err,
			'message'    : 'Error finding orders'
		} );
		for ( var i = 0; i < customers.length; i++ ) {
			if ( customers[ i ].orders ) {
				for ( var j=0; j< customers[ i ].orders.length; j++ ) {
					orders.push( customers[ i ].orders[ j ] );
				}
			}
		}
		reply( orders );
	} );
};

exports.getCustomer = function ( request, reply ) {
	schema.customers.findOne( { '_id' : request.params.id }, function ( err,customer ) {
		if ( err ) return reply( {
			'statusCode' : '404',
			'error'      : err,
			'message'    : 'Error finding specific customer'
		} );
		reply( customer );
	} );
};

exports.deleteCustomer = function ( request, reply ) {
	schema.customers.remove( { '_id' : request.params.id }, function ( err,customer ) {
		if ( err ) return reply( {
			'statusCode' : '404',
			'error'      : err,
			'message'    : 'Failed to delete customer'
		} );
		reply( customer );
	} );
};

exports.editCustomer = function ( request, res ) {
	schema.customers.findOneAndUpdate( { '_id' : request.params.id },
		{ $set: {
			fname  : request.payload.fname,
			lname  : request.payload.lname,
			city   : request.payload.city,
			joined : request.payload.joined }
		}, {} , function ( err,customer ) {
		if ( err ) return reply( {
			'statusCode' : '500',
			'error'      : err,
			'message'    : 'Failed to edit customer'
		} );
		reply( customer );
	});
};

exports.addCustomerOrder = function ( request, res ) {
	var total = request.payload.product_qty * request.payload.product_cost;
	schema.customers.findOneAndUpdate( { '_id' : request.params.id },
		{ $push:
			{ 'orders' : {
				product  : request.payload.product_name,
				cost     : request.payload.product_cost,
				quantity : request.payload.product_qty,
				total    : total
			} }
		}, { safe: true, upsert: true }, function ( err,customer ) {
		if ( err ) return reply( {
			'statusCode' : '500',
			'error'      : err,
			'message'    : 'Failed to add order'
		} );
		reply( customer );f
	} );
};

} () );
