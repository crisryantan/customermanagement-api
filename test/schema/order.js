'use strict';

var expect    = require( 'chai' ).expect;
var appDir    = process.cwd();
var customer = require( appDir + '/src/models/Order' );

describe( 'DB Schema - Order.js', function () {
	var field = customer.schema.tree;
	describe( 'Order schema', function () {
		it( 'expect to have all the fields', function () {
			expect( field ).to.have.property( 'product' );
			expect( field ).to.have.property( 'cost' );
			expect( field ).to.have.property( 'quantity' );
			expect( field ).to.have.property( 'total' );
			expect( field ).to.have.property( 'customer' );
		} );

		describe( 'product', function () {
			it( 'expect field to be string format', function () {
				expect( field.product.type ).to.equal( String );
			} );
			it( 'expect field to be required', function () {
				expect( field.product.required ).to.equal( true );
			} );
		} );

		describe( 'cost', function () {
			it( 'expect field to be number format', function () {
				expect( field.cost.type ).to.equal( Number );
			} );
			it( 'expect field to be required', function () {
				expect( field.cost.required ).to.equal( true );
			} );
		} );

		describe( 'quantity', function () {
			it( 'expect field to be number format', function () {
				expect( field.quantity.type ).to.equal( Number );
			} );
			it( 'expect field to be required', function () {
				expect( field.quantity.required ).to.equal( true );
			} );
		} );

		describe( 'total', function () {
			it( 'expect field to be number format', function () {
				expect( field.total.type ).to.equal( Number );
			} );
			it( 'expect field to be required', function () {
				expect( field.total.required ).to.equal( true );
			} );
		} );

		describe( 'customer', function () {
			it( 'expect field to be an object', function () {
				expect( typeof field.customer ).to.equal( 'object' );
			} );
			it( 'expect field to refer to customers', function () {
				expect( field.customer.ref ).to.equal( 'customers' );
			} );
		} );
	} );
} );
