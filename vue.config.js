module.exports = {
  devServer: {
    port: 5000
  },
  configureWebpack: {
    output: {
      libraryExport: "default"
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          include: /src/,
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            appendTsSuffixTo: [/\.vue$/]
          }
        },
        {
          test: /\.sass$/,
          use: [
            "vue-style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                indentedSyntax: true,
                // sass-loader version >= 8
                sassOptions: {
                  indentedSyntax: true
                }
              }
            }
          ]
        }
      ]
    }
  },
  chainWebpack: config => {
    config.module.rule("ts").uses.delete("thread-loader");
  }
};
