/**
 * Module dependencies.
 */
var winston = require('winston')

exports = module.exports = function() {
  var logger = new Logger();
  return logger;
};

/**
 * Component annotations.
 */
exports['@singleton'] = true;

function Logger() {

}

Logger.prototype.log = function(msg) {
  winston.log('log', msg);
};

Logger.prototype.info = function(msg) {
  winston.info('info', msg);
};

Logger.prototype.warn = function(msg) {
  winston.warn('warn', msg);
};

Logger.prototype.error = function(msg) {
  winston.error('error', msg);
};
