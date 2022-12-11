//simple api logger for debugging
const logger = (req, _, next) => {
  console.log(req.path, req.method);
  next();
};

module.exports = logger;
