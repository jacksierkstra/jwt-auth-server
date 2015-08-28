/**
 * Module dependencies.
 */
var IoC = require('electrolyte');


/**
 * Draw routes.
 *
 * Route handlers are created using Electrolyte, which automatically wires
 * together any necessary components, including database connections, logging
 * facilities, configuration settings, etc.
 */
module.exports = function routes() {

  this.get('/', function(req, res) { return res.send('root url'); });

}
