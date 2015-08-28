exports = module.exports = function(logger, userRepository) {

  function logRequest(req, res, next) {
      logger.log(req.body);
      next();
  }

  function register(req, res, next) {
    console.log();
    userRepository.findById(req.body.id)
    .then(function(msg) {
      res.send({ "status" : msg });
    });
  }

  return [
    logRequest,
    register
  ];

};

exports['@require'] = [ 'logger', 'repositories/userRepository'];
