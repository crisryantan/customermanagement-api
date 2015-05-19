var customers = require( './controllers/Customers.js' );
var orders    = require( './controllers/Orders.js' );

module.exports = [
	{
		'method'  : 'GET',
		'path'    : '/getcustomers',
		'handler' : customers.displayCustomers
	},
	{
		'method'  : 'POST',
		'path'    : '/addcustomer',
		'handler' : customers.addCustomer
	},
	{
		'method'  : 'GET',
		'path'    : '/customer/{id}',
		'handler' : customers.getCustomer
	},
	{
		'method'  : 'DELETE',
		'path'    : '/customer/{id}',
		'handler' : customers.deleteCustomer
	},
	{
		'method'  : 'PUT',
		'path'    : '/customer/{id}',
		'handler' : customers.editCustomer
	},
	{
		'method'  : 'GET',
		'path'    : '/orders',
		'handler' : orders.getAllOrders
	},
	{
		'method'  : 'POST',
		'path'    : '/addorder/{id}',
		'handler' : orders.addCustomerOrder
	}
];
