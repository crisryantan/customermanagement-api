var customerAPI = require( './controllers/customerAPI.js' );

module.exports = [
	{
		method  : 'GET',
		path    : '/getcustomers',
		handler :  customerAPI.displayCustomers
	},
	{
		method  : 'POST',
		path    : '/addcustomer',
		handler : customerAPI.addCustomer
	},
	{
		method  : 'GET',
		path    : '/orders',
		handler : customerAPI.getAllOrders
	},
	{
		method  : 'GET',
		path    : '/customer/{id}',
		handler : customerAPI.getCustomer
	},
	{
		method  : 'DELETE',
		path    : '/customer/{id}',
		handler : customerAPI.deleteCustomer
	},
	{
		method  : 'PUT',
		path    : '/customer/{id}',
		handler : customerAPI.editCustomer
	},
	{
		method  : 'PUT',
		path    : '/addorder/{id}',
		handler : customerAPI.addCustomerOrder
	}
];
