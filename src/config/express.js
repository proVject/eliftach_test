
const compression = require('compression')
const express = require('express')

const origins = [process.env.SITE_URL]

module.exports = (app = []) => {
  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));

  app.use(async function (req, res, next) {
    const allowedOrigins = origins;
    const reqOrigin = req.headers.origin;

    if (allowedOrigins.includes(reqOrigin)) {
      res.setHeader("Access-Control-Allow-Origin", reqOrigin);
    }
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, HEAD");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Wallet-Pass-Token",);
    res.header("Access-Control-Allow-Credentials", true);

    return next();
  });
};
