const jwt = require('jsonwebtoken');
const User = require('../Models/userSchema');

exports.auth = async (req, res, next) => {
  //get Token from header
  const token = req.header('x-auth-token');

  //check Token if exist
  if (!token) {
    return res.status(401).json({ error: 'No Token, Authorization denied' });
  }

  //verify Token
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ error: 'No user found with this id' });
    }

    req.user = user;
    next();
  } catch (e) {
    res.status(401).json({ error: 'Token is invalid' });
  }
};
