module.exports = (req, res, next) => {
  // Simple authentication check (replace with real authentication logic)
  const token = req.header('Authorization');
  if (token === 'mysecrettoken') {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
};
