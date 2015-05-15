
// Instrumentation Header
{
    var fs = require('fs');
    var __statement_JdonHE, __expression_Q50ZMe, __block_FhGq4m;
    var store = require('/Users/gzRyan/Documents/angularJohnPapa/customermanagement-api/node_modules/gulp-coverage/contrib/coverage_store.js');
    
    __statement_JdonHE = function(i) {
        var fd = store.register('/Users/gzRyan/Documents/angularJohnPapa/customermanagement-api/src/models/Customer.js');
        fs.writeSync(fd, '{"statement": {"node": ' + i + '}},\n');
    }; 
    
    __expression_Q50ZMe = function(i) {
        var fd = store.register('/Users/gzRyan/Documents/angularJohnPapa/customermanagement-api/src/models/Customer.js');
        fs.writeSync(fd, '{"expression": {"node": ' + i + '}},\n');
    }; 
    
    __block_FhGq4m = function(i) {
        var fd = store.register('/Users/gzRyan/Documents/angularJohnPapa/customermanagement-api/src/models/Customer.js');
        fs.writeSync(fd, '{"block": ' + i + '},\n');
    }; 
    __intro_NAJFdW = function(id, obj) {
        // console.log('__intro: ', id, ', obj.__instrumented_miss: ', obj.__instrumented_miss, ', obj.length: ', obj.length);
        (typeof obj === 'object' || typeof obj === 'function') &&
            Object.defineProperty && Object.defineProperty(obj, '__instrumented_miss', {enumerable: false, writable: true});
        obj.__instrumented_miss = obj.__instrumented_miss || [];
        if ('undefined' !== typeof obj && null !== obj && 'undefined' !== typeof obj.__instrumented_miss) {
            if (obj.length === 0) {
                // console.log('interim miss: ', id);
                obj.__instrumented_miss[id] = true;
            } else {
                obj.__instrumented_miss[id] = false;
            }
        }
        return obj;
    };
    function isProbablyChainable(obj, id) {
        return obj &&
            obj.__instrumented_miss[id] !== undefined &&
            'number' === typeof obj.length;
    }
    __extro_W6MNV9 = function(id, obj) {
        var fd = store.register('/Users/gzRyan/Documents/angularJohnPapa/customermanagement-api/src/models/Customer.js');
        // console.log('__extro: ', id, ', obj.__instrumented_miss: ', obj.__instrumented_miss, ', obj.length: ', obj.length);
        if ('undefined' !== typeof obj && null !== obj && 'undefined' !== typeof obj.__instrumented_miss) {
            if (isProbablyChainable(obj, id) && obj.length === 0 && obj.__instrumented_miss[id]) {
                // if the call was not a "constructor" - i.e. it did not add things to the chainable
                // and it did not return anything from the chainable, it is a miss
                // console.log('miss: ', id);
            } else {
                fs.writeSync(fd, '{"chain": {"node": ' + id + '}},\n');
            }
            obj.__instrumented_miss[id] = undefined;
        } else {
            fs.writeSync(fd, '{"chain": {"node": ' + id + '}},\n');
        }
        return obj;
    };
};
////////////////////////

// Instrumented Code
{
    __statement_JdonHE(0);
    __expression_Q50ZMe(1), function () {
        __block_FhGq4m(0);
        {
            __statement_JdonHE(2);
            'use strict';
        }
        {
            __statement_JdonHE(3);
            var mongoose = (__expression_Q50ZMe(4), require('mongoose'));
        }
        {
            __statement_JdonHE(5);
            var customerSchema = __extro_W6MNV9(6, __intro_NAJFdW(6, mongoose).Schema({
                    'joined': {
                        'type': Date,
                        'required': true,
                        'default': '01/01/1900'
                    },
                    'fname': {
                        'type': String,
                        'required': true,
                        'default': ''
                    },
                    'lname': {
                        'type': String,
                        'required': true,
                        'default': ''
                    },
                    'city': {
                        'type': String,
                        'required': true,
                        'default': ''
                    },
                    'orderTotal': {
                        'type': Number
                    },
                    'orders': [
                        {
                            'product': String,
                            'cost': Number,
                            'quantity': Number,
                            'total': Number
                        }
                    ]
                }));
        }
        {
            __statement_JdonHE(7);
            __extro_W6MNV9(8, __intro_NAJFdW(8, mongoose).model('customers', customerSchema));
        }
        {
            __statement_JdonHE(9);
            module.exports = __extro_W6MNV9(10, __intro_NAJFdW(10, mongoose).model('customers'));
        }
    }();
}