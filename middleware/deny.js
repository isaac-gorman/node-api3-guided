module.exports = () => {
  return (req, res, next) => {
    // accept everthing but url from insomina
    const agent = req.headers["user-agent"];
    if (/insomnia/.test(agent)) {
      // the client is Insomina, deny them access
      return res.status(418).json({
        message: "Insomia is not premited",
      });
    }
    next();
  };
};
