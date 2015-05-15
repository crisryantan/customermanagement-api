
// Instrumentation Header
{
    var fs = require('fs');
    var __statement_XeI1P5, __expression_f8BgNP, __block_D2jqIP;
    var store = require('/Users/gzRyan/Documents/angularJohnPapa/customermanagement-api/node_modules/gulp-coverage/contrib/coverage_store.js');
    
    __statement_XeI1P5 = function(i) {
        var fd = store.register('/Users/gzRyan/Documents/angularJohnPapa/customermanagement-api/src/models/Order.js');
        fs.writeSync(fd, '{"statement": {"node": ' + i + '}},\n');
    }; 
    
    __expression_f8BgNP = function(i) {
        var fd = store.register('/Users/gzRyan/Documents/angularJohnPapa/customermanagement-api/src/models/Order.js');
        fs.writeSync(fd, '{"expression": {"node": ' + i + '}},\n');
    }; 
    
    __block_D2jqIP = function(i) {
        var fd = store.register('/Users/gzRyan/Documents/angularJohnPapa/customermanagement-api/src/models/Order.js');
        fs.writeSync(fd, '{"block": ' + i + '},\n');
    }; 
    __intro_bUbig6 = function(id, obj) {
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
    __extro_IlaFhH = function(id, obj) {
        var fd = store.register('/Users/gzRyan/Documents/angularJohnPapa/customermanagement-api/src/models/Order.js');
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
    __statement_XeI1P5(0);
    __expression_f8BgNP(1), function () {
        __block_D2jqIP(0);
        {
            __statement_XeI1P5(2);
            'use strict';
        }
        {
            __statement_XeI1P5(3);
            var mongoose = (__expression_f8BgNP(4), require('mongoose'));
        }
        {
            __statement_XeI1P5(5);
            var orderSchema = __extro_IlaFhH(6, __intro_bUbig6(6, mongoose).Schema({
                    'product': {
                        'type': String,
                        'required': true
                    },
                    'cost': {
                        'type': Number,
                        'required': true
                    },
                    'quantity': {
                        'type': Number,
                        'required': true
                    },
                    'total': {
                        'type': Number,
                        'required': true
                    },
                    'customer': {
                        'type': mongoose.Schema.Types.ObjectId,
                        'ref': 'customers'
                    }
                }));
        }
        {
            __statement_XeI1P5(7);
            __extro_IlaFhH(8, __intro_bUbig6(8, mongoose).model('orders', orderSchema));
        }
        {
            __statement_XeI1P5(9);
            module.exports = __extro_IlaFhH(10, __intro_bUbig6(10, mongoose).model('orders'));
        }
    }();
}