const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://fitness-tracker-chi-ashen.vercel.app/",
      changeOrigin: true,
    })
  );
};
