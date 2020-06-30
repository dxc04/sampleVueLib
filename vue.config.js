module.exports = {
  configureWebpack: {
    output: {
      libraryExport: "default"
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: "ts-loader",
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        }
      ]
    }
  },
  devServer: {
    port: 5000
  }
};
