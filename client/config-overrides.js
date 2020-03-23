const rewireAliases = require("react-app-rewire-aliases");
const { paths } = require("react-app-rewired");
const path = require("path");

/* config-overrides.js */
module.exports = override = (config, env) => {
  config = rewireAliases.aliasesOptions({
    "@routes": path.resolve(__dirname, `${paths.appSrc}/routes/`),
    "@hoc": path.resolve(__dirname, `${paths.appSrc}/hoc/`),
    "@assets": path.resolve(__dirname, `${paths.appSrc}/assets/`),
    "@components": path.resolve(__dirname, `${paths.appSrc}/components/`),
    "@context": path.resolve(__dirname, `${paths.appSrc}/context/`),
    "@forms": path.resolve(__dirname, `${paths.appSrc}/forms/`),
    "@pages": path.resolve(__dirname, `${paths.appSrc}/pages/`),
    "@util": path.resolve(__dirname, `${paths.appSrc}/util/`),
    "@hooks": path.resolve(__dirname, `${paths.appSrc}/hooks/`),
    "@context": path.resolve(__dirname, `${paths.appSrc}/context/`),
    "@inputs": path.resolve(__dirname, `${paths.appSrc}/inputs/`)
  })(config, env);
  return config;
};
