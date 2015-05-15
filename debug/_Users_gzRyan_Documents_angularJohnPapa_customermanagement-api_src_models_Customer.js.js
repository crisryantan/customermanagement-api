
// Instrumentation Header
{
    var fs = require('fs');
    var __statement_cKBjFE, __expression_qlqVFx, __block_F8besm;
    var store = require('/Users/gzRyan/Documents/angularJohnPapa/customermanagement-api/node_modules/gulp-coverage/contrib/coverage_store.js');
    
    __statement_cKBjFE = function(i) {
        var fd = store.register('/Users/gzRyan/Documents/angularJohnPapa/customermanagement-api/src/models/Customer.js');
        fs.writeSync(fd, '{"statement": {"node": ' + i + '}},\n');
    }; 
    
    __expression_qlqVFx = function(i) {
        var fd = store.register('/Users/gzRyan/Documents/angularJohnPapa/customermanagement-api/src/models/Customer.js');
        fs.writeSync(fd, '{"expression": {"node": ' + i + '}},\n');
    }; 
    
    __block_F8besm = function(i) {
        var fd = store.register('/Users/gzRyan/Documents/angularJohnPapa/customermanagement-api/src/models/Customer.js');
        fs.writeSync(fd, '{"block": ' + i + '},\n');
    }; 
    __intro_SmJ2cg = function(id, obj) {
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
    __extro_RFHVaC = function(id, obj) {
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
    __statement_cKBjFE(0);
    __expression_qlqVFx(1), function () {
        __block_F8besm(0);
        {
            __statement_cKBjFE(2);
            'use strict';
        }
        {
            __statement_cKBjFE(3);
            var mongoose = (__expression_qlqVFx(4), require('mongoose'));
        }
        {
            __statement_cKBjFE(5);
            var customerSchema = __extro_RFHVaC(6, __intro_SmJ2cg(6, mongoose).Schema({
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
                            'type': mongoose.Schema.Types.ObjectId,
                            'ref': 'orders'
                        }
                    ]
                }));
        }
        {
            __statement_cKBjFE(7);
            __extro_RFHVaC(8, __intro_SmJ2cg(8, mongoose).model('customers', customerSchema));
        }
        {
            __statement_cKBjFE(9);
            module.exports = __extro_RFHVaC(10, __intro_SmJ2cg(10, mongoose).model('customers'));
        }
    }();
}