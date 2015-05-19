( function() {
	'use strict';

var Mongoose       = require( 'mongoose' );
var CustomerSchema = Mongoose.model( 'Customer' );

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

} () );
