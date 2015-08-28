exports = module.exports = function(logger) {

  function logRequest(req, res, next) {
    logger.info(req.ip + ' ' + req.headers['user-agent']);
    next();
  }

  function homeSweetHome(req, res, next) {
    res.status(200).json({'message' : 'There is no place like 127.0.0.1!'});
  }

  return [
    logRequest,
    homeSweetHome
  ];

};

exports['@require'] = [ 'logger'];
