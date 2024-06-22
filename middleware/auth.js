const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const authHeader = req.header('Authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).send('Access denied. No token provided or invalid format.');
  }

  const token = authHeader.split(' ')[1];
  try {
    const verified = jwt.verify(token, 'your_jwt_secret');
    req.employee = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid token');
  }
}

module.exports = auth;
