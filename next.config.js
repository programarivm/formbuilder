const debug = process.env.NODE_ENV !== "production";

module.exports = {
  basePath: !debug ? '/formbuilder' : '',
  assetPrefix: !debug ? '/formbuilder/' : '',
}
