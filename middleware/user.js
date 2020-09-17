const users = require("../users/users-model");

function checkUserID() {
  return (req, res, next) => {
    users
      .findById(req.params.id)
      .then((user) => {
        if (user) {
          req.user = user;
          next();
        } else {
          res.status(404).json({
            message: "User not found",
          });
        }
      })
      .catch(next);
  };
}

function validateUser() {
  return (req, res, next) => {
    if (!req.body.name || !req.body.email) {
      return res.status(400).json({
        message: "Missing user name or email",
      });
    }
    // req.body = body;
    next();
  };
}

module.exports = {
  checkUserID,
  validateUser,
};
