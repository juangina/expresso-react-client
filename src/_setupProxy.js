// const proxy = require('http-proxy-middleware').createProxyMiddleware;
// console.log()
//Need an if statement here to determine if it is a local or a production environment
//Local Environment
// module.exports = function (app) {
//     app.use(proxy(`/auth/**`, { target: 'http://localhost:5000' }));
// };
//Production Environment
// module.exports = function (app) {
//     app.use(proxy("/auth/**", { target: 'https://expresso.api.theaccidentallifestyle.net', changeOrigin: true }));
// };
