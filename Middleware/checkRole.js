const authRole = (roles) => {
  return (req, res, next) =>
    !roles.includes(req.user.role)
      ? res.status(403).send('Unauthorized')
      : next();
};

module.exports = authRole;
