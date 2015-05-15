
// Instrumentation Header
{
    var fs = require('fs');
    var __statement_HgkSHx, __expression_Ch5Aw7, __block_jtHUPz;
    var store = require('/Users/gzRyan/Documents/angularJohnPapa/customermanagement-api/node_modules/gulp-coverage/contrib/coverage_store.js');
    
    __statement_HgkSHx = function(i) {
        var fd = store.register('/Users/gzRyan/Documents/angularJohnPapa/customermanagement-api/src/models/Customer.js');
        fs.writeSync(fd, '{"statement": {"node": ' + i + '}},\n');
    }; 
    
    __expression_Ch5Aw7 = function(i) {
        var fd = store.register('/Users/gzRyan/Documents/angularJohnPapa/customermanagement-api/src/models/Customer.js');
        fs.writeSync(fd, '{"expression": {"node": ' + i + '}},\n');
    }; 
    
    __block_jtHUPz = function(i) {
        var fd = store.register('/Users/gzRyan/Documents/angularJohnPapa/customermanagement-api/src/models/Customer.js');
        fs.writeSync(fd, '{"block": ' + i + '},\n');
    }; 
    __intro_d4vjk_ = function(id, obj) {
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
    __extro_nb2cai = function(id, obj) {
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
    __statement_HgkSHx(0);
    __expression_Ch5Aw7(1), function () {
        __block_jtHUPz(0);
        {
            __statement_HgkSHx(2);
            'use strict';
        }
        {
            __statement_HgkSHx(3);
            var mongoose = (__expression_Ch5Aw7(4), require('mongoose'));
        }
        {
            __statement_HgkSHx(5);
            var customerSchema = __extro_nb2cai(6, __intro_d4vjk_(6, mongoose).Schema({
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
            __statement_HgkSHx(7);
            __extro_nb2cai(8, __intro_d4vjk_(8, mongoose).model('customers', customerSchema));
        }
        {
            __statement_HgkSHx(9);
            module.exports = __extro_nb2cai(10, __intro_d4vjk_(10, mongoose).model('customers'));
        }
    }();
}