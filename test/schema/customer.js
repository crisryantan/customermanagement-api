'use strict';

var expect    = require( 'chai' ).expect;
var appDir    = process.cwd();
var customer = require( appDir + '/src/models/Customer' );

describe( 'DB Schema - Customer.js', function () {
	var field = customer.schema.tree;
	describe( 'Customer schema', function () {
		it( 'expect to have all the fields', function () {
			expect( field ).to.have.property( 'joined' );
			expect( field ).to.have.property( 'fname' );
			expect( field ).to.have.property( 'lname' );
			expect( field ).to.have.property( 'city' );
			expect( field ).to.have.property( 'orderTotal' );
			expect( field ).to.have.property( 'orders' );
		} );
	} );
} );
