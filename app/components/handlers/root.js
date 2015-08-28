exports = module.exports = function(settings, logger) {

  function homeSweetHome(req, res, next) {
    res.send('There is no place like 127.0.0.1!');
  }

  return [
    homeSweetHome
  ];

};

/**
 * Component annotations.
 */
exports['@require'] = [ 'settings', 'logger'];
