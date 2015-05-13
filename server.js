var Hapi     = require( 'hapi' );
var server   = new Hapi.Server();
var _        = require( 'lodash' );
var mongoose = require( 'mongoose' );
var configDB = require( './config/database.js' );

// connect to mongo
mongoose.connect( configDB.url );

// connect to port
server.connection( { 'port' : 3000 } );

// routes
var pageRoutes = _.union( require( './src/routes' ) );

// populate route
server.route( pageRoutes );


server.start( function ( err ) {
	if ( !err ) {
		console.log( 'server running on port 3000' );
	}
} );
