( function() {
	'use strict';

var Mongoose       = require( 'mongoose' );
var OrderSchema    = Mongoose.model( 'Order' );

exports.getAllOrders = function ( request, reply ) {
	OrderSchema.find( {}, function ( err, customers ) {
		if ( err ) {
			return reply( {
			'statusCode' : '404',
			'error'      : 'Error finding customers'
			} );
		}
		reply( customers );
	} );
};

exports.addCustomerOrder = function ( request, reply ) {
	var total = request.payload.productQuantity * request.payload.productCost;
	var order = new OrderSchema( {
		'product'    : request.payload.productName,
		'cost'       : request.payload.productCost,
		'quantity'   : request.payload.productQuantity,
		'customerId' : request.params.id,
		'total'      : total
	} ).save( function( err, order ) {
		if ( err ) {
			return reply( {
				'statusCode' : '500',
				'error'      : err,
				'message'    : 'Failed to add order'
			} );
		}
		reply( order );
	} );
};

} () );
