const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/vuestagram",
  transpileDependencies: true,
  lintOnSave: false,
  pwa: {
    name: "Vuestagram",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    workboxOptions: {
      exclude: [/\.map$/, /manifest\.json$/, "index.html"],
    },
  },
});
