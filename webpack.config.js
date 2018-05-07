const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = env => {
  console.log(env);

  return {
    entry: "./src/index.tsx",

    // Enable sourcemaps for debugging webpack's output
    devtool: "source-map",

    // Tells webpack-dev-server to serve the files from the `dist` directory on `localhost:8080`
    devServer: {
      historyApiFallback: true, // Fallback URL for react-router-dom
      contentBase: './dist'
    },

    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist")
    },

    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({ // Generating index.html, so we don't need to manually update the included script(s)
        template: 'index.html'
      }),

      // Set NODE_ENV to proper mode so depdencies on libraries can adjust themselves (e.g. if production, remove logging)
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': env && JSON.stringify((env.production) ? 'production' : 'development')
      }),

      // new BundleAnalyzerPlugin()
    ],

    resolve: {
      //Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
      rules: [
        // CSS files
        {
          test: /\.(css|jsx)$/,
          include: path.resolve(__dirname, "src/styles"),
          use: ['style-loader', 'css-loader']
        },

        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        // awesome-ts-loader can't be used with webpack-dev-server (TypeError: Cannot read property '_tsInstances' of undefined)
        // https://github.com/s-panferov/awesome-typescript-loader/issues/541
        {
          test: /\.tsx?$/,
          include: path.resolve(__dirname, "src"),
          loader: "ts-loader"
        },

        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        // Needed for production build only.
        {
          enforce: "pre",
          test: /\.js$/,
          include: path.resolve(__dirname, "src"),
          loader: "source-map-loader"
        },

        {
          test: /\.(png|svg|jpg|gif)$/,
          include: path.resolve(__dirname, "src/images"),
          use: { loader: 'file-loader', options: { outputPath: 'images' } }
        }
      ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //   "react": "React",
    //   "react-dom": "ReactDOM"
    // }
  }
};
