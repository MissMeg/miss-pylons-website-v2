module.exports = function () {
  const presets = [
    ["@babel/env", "@babel/preset-react", {
      development: process.env.BABEL_ENV === "development",
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1"
      },
      useBuiltIns: "usage"
    }]
  ];
  const plugins = [];

  return {
    presets,
    plugins
  };
}
