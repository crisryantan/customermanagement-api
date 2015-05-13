
// Instrumentation Header
{
    var fs = require('fs');
    var __statement_L1heTJ, __expression_kgWHQ2, __block_YrAgNM;
    var store = require('/Users/gzRyan/Documents/angularJohnPapa/customermanagement-api/node_modules/gulp-coverage/contrib/coverage_store.js');
    
    __statement_L1heTJ = function(i) {
        var fd = store.register('/Users/gzRyan/Documents/angularJohnPapa/customermanagement-api/src/models/Customer.js');
        fs.writeSync(fd, '{"statement": {"node": ' + i + '}},\n');
    }; 
    
    __expression_kgWHQ2 = function(i) {
        var fd = store.register('/Users/gzRyan/Documents/angularJohnPapa/customermanagement-api/src/models/Customer.js');
        fs.writeSync(fd, '{"expression": {"node": ' + i + '}},\n');
    }; 
    
    __block_YrAgNM = function(i) {
        var fd = store.register('/Users/gzRyan/Documents/angularJohnPapa/customermanagement-api/src/models/Customer.js');
        fs.writeSync(fd, '{"block": ' + i + '},\n');
    }; 
    __intro_kx_EyZ = function(id, obj) {
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
    __extro_Soik0F = function(id, obj) {
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
    __statement_L1heTJ(0);
    __expression_kgWHQ2(1), function () {
        __block_YrAgNM(0);
        {
            __statement_L1heTJ(2);
            'use strict';
        }
        {
            __statement_L1heTJ(3);
            var mongoose = (__expression_kgWHQ2(4), require('mongoose'));
        }
        {
            __statement_L1heTJ(5);
            var customerSchema = __extro_Soik0F(6, __intro_kx_EyZ(6, mongoose).Schema({
                    'joined': {
                        'type': String,
                        'required': true
                    },
                    'fname': {
                        'type': String,
                        'required': true
                    },
                    'lname': {
                        'type': String,
                        'required': true
                    },
                    'city': {
                        'type': String,
                        'required': true
                    },
                    'orderTotal': Number,
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
            __statement_L1heTJ(7);
            __extro_Soik0F(8, __intro_kx_EyZ(8, mongoose).model('customers', customerSchema));
        }
        {
            __statement_L1heTJ(9);
            module.exports = __extro_Soik0F(10, __intro_kx_EyZ(10, mongoose).model('customers'));
        }
    }();
}