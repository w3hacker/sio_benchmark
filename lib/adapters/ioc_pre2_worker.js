/**
 * socket.io-client-pre2 worker
 * 
 * Copyright (C) 2014 guanglin.an (lucky315.an@gmail.com)
 */

 var ioc = require('socket.io-client');
 var Worker = require('../base_worker.js');
 var debug = require('debug')('benchmark:ioc_worker');

 /**
  * Module exports.
  */
 var IoWorker = exports = module.exports = function(opts){
  Worker.call(this);

  debug('create ioc_worker...');
 };

 // Inherits from `EventEmitter.`
 IoWorker.prototype.__proto__ = Worker.prototype;

 // proto funcs
 (function(){

  // @overload 
  this.createClient = function(){
    debug('create client');
    //  mock ioc, for testing terminate func
    var fakeClient = 
    { 
      io: 
      { 
        engine: {
          close: function(){
            debug('ioc disconnected success!');            
          }
        }
      }
    };
    return fakeClient;
  };
 }).call(IoWorker.prototype);