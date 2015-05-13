( function() {
	'use strict';

var CustomerSchema = require( '../models/Customer' );
var mongoose        = require( 'mongoose' );
var ObjectId        = mongoose.Types.ObjectId;

exports.displayCustomers = function( request, reply ) {
	CustomerSchema.find( {}, function ( err, customers ) {
		if ( err ) {
			return reply( {
			'statusCode' : '404',
			'error'      : 'Error finding customers'
			} );
		}
		reply( customers );
	} );
};

exports.addCustomer = function( request, reply ) {
	new CustomerSchema( {}, { 'versionKey' : false } );
	var newCustomer = new CustomerSchema( {
		'joined' : request.payload.joined,
		'fname'  : request.payload.fname,
		'lname'  : request.payload.lname,
		'city'   : request.payload.city
	} );
	newCustomer.save( function ( err, customer ) {
		if ( err ) {
			return reply( {
				'statusCode' : '500',
				'error'      : err,
				'message'    : 'Error creating customer'
			} );
		}
		reply( customer );
	} );
};

exports.getAllOrders = function ( request, reply ) {
	var orders = [];
	CustomerSchema.find( {}, function ( err, customers ) {
		if ( err ){
			return reply( {
				'statusCode' : '404',
				'error'      : err,
				'message'    : 'Error finding orders'
			} );
		}
		for ( var i = 0; i < customers.length; i++ ) {
			if ( customers[ i ].orders ) {
				for ( var j = 0; j < customers[ i ].orders.length; j++ ) {
					orders.push( customers[ i ].orders[ j ] );
				}
			}
		}
		reply( orders );
	} );
};

exports.getCustomer = function ( request, reply ) {
	CustomerSchema.findOne( { '_id' : request.params.id }, function ( err, customer ) {
		if ( err ) {
			return reply( {
				'statusCode' : '404',
				'error'      : err,
				'message'    : 'Error finding specific customer'
			} );
		}
		reply( customer );
	} );
};

exports.deleteCustomer = function ( request, reply ) {
	CustomerSchema.remove( { '_id' : request.params.id }, function ( err, customer ) {
		if ( err ) {
			return reply( {
				'statusCode' : '404',
				'error'      : err,
				'message'    : 'Failed to delete customer'
			} );
		}
		reply( customer );
	} );
};

exports.editCustomer = function ( request, reply ) {
	CustomerSchema.findOneAndUpdate( { '_id' : request.params.id },
		{ '$set' : {
			'fname'  : request.payload.fname,
			'lname'  : request.payload.lname,
			'city'   : request.payload.city,
			'joined' : request.payload.joined }
		}, {}, function ( err, customer ) {
		if ( err ) {
			return reply( {
				'statusCode' : '500',
				'error'      : err,
				'message'    : 'Failed to edit customer'
			} );
		}
		reply( customer );
	});
};

exports.addCustomerOrder = function ( request, reply ) {
	var total = request.payload.productQuantity * request.payload.productCost;
	CustomerSchema.findOneAndUpdate( { '_id' : request.params.id },
		{ '$push' :
			{ 'orders' : {
				'product'  : request.payload.productName,
				'cost'     : request.payload.productCost,
				'quantity' : request.payload.productQuantity,
				'total'    : total
			} }
		}, { 'safe' : true, 'upsert' : true }, function ( err, customer ) {
		if ( err ) {
			return reply( {
				'statusCode' : '500',
				'error'      : err,
				'message'    : 'Failed to add order'
			} );
		}
		reply( customer );
	} );
};

} () );
