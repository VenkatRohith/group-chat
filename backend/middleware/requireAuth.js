const { verifyToken } = require("../utils/tokenUtils");

const requireAuth = async (req, res, next) => {
  //verify authorization
  const { authorization = "" } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  try {
    const [, token = ""] = authorization.split(" ") || [];

    if (!token) {
      return res.status(401).json({ error: "Invalid Authorization Token" });
    }

    const { userId } = verifyToken(token);
    req.currentLoggedUser = { userId };
    next();
  } catch (error) {
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;
