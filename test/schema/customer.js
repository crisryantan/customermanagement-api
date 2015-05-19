'use strict';

var expect         = require( 'chai' ).expect;
var Mongoose       = require( 'mongoose' );
var CustomerSchema = Mongoose.model( 'Customer' );

describe( 'DB Schema - Customer.js', function () {
	var field = CustomerSchema.schema.tree;
	describe( 'Customer schema', function () {
		it( 'expect to have all the fields', function () {
			expect( field ).to.have.property( 'joined' );
			expect( field ).to.have.property( 'fname' );
			expect( field ).to.have.property( 'lname' );
			expect( field ).to.have.property( 'city' );
			expect( field ).to.have.property( 'orderTotal' );
			expect( field ).to.have.property( 'orders' );
		} );

		describe( 'joined', function () {
			it( 'expect field to be date format', function () {
				expect( field.joined.type ).to.equal( Date );
			} );
			it( 'expect field default is 01/01/1900', function () {
				expect( '01/01/1900' ).to.equal( field.joined.default );
			} );
		} );

		describe( 'fname', function () {
			it( 'expect field to be string format', function () {
				expect( field.fname.type ).to.equal( String );
			} );
			it( 'expect field to be required', function () {
				expect( field.fname.required ).to.equal( true );
			} );
		} );

		describe( 'lname', function () {
			it( 'expect field to be string format', function () {
				expect( field.lname.type ).to.equal( String );
			} );
			it( 'expect field to be required', function () {
				expect( field.lname.required ).to.equal( true );
			} );
		} );

		describe( 'city', function () {
			it( 'expect field to be string format', function () {
				expect( field.city.type ).to.equal( String );
			} );
			it( 'expect field to be required', function () {
				expect( field.city.required ).to.equal( true );
			} );
		} );

		describe( 'orderTotal', function () {
			it( 'expect field to be number format', function () {
				expect( field.orderTotal.type ).to.equal( Number );
			} );
		} );

		describe( 'orders', function () {
			it( 'expect field to be an object', function () {
				expect( typeof field.orders ).to.equal( 'object' );
			} );
			it( 'expect field to refer to orders', function () {
				expect( field.orders[ 0 ].ref ).to.equal( 'orders' );
			} );
		} );
	} );
} );
