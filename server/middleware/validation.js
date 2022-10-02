const axios = require("axios");
const Validation = (req, res, next) => {
  let ips = (
    req.headers["cf-connecting-ip"] ||
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    ""
  ).split(",");

  let ip = ips[0].trim();
  axios(`https://ipwho.is/${ip}`).then((val) => {
    const dataApi = val.data;
    req.body = dataApi;
    next();
  });
};

module.exports = Validation;
