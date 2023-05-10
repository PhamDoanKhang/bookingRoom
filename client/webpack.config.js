const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const deps = require("./package.json").dependencies
const packageJsonDependencies = require("./package.json").dependencies;
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

const sharedDependencies = [
  'react',
  'react-dom',
  "react-redux"
];
const sharedDependencyConfig = sharedDependencies.reduce((configBuilder, dependencyName) => {
  configBuilder[dependencyName] = {
    singleton: true,
    eager: true,
    requiredVersion: packageJsonDependencies[dependencyName],
  };
  return configBuilder;
}, {});

module.exports = {
  // entry: "./src/index.js", // Dẫn tới file index.js ta đã tạo
  entry: path.join(__dirname,"./src/index.js"),
  output: {
    path: path.resolve(__dirname, "/build"), // Thư mục chứa file được build ra
    filename: "bundle.js", // Tên file được build ra
  },

  module: {
    rules: [
      {
        test: /\.js$/, // Sẽ sử dụng babel-loader cho những file .js
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: ["babel-loader"],
      },
      {
        test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  // Chứa các plugins sẽ cài đặt trong tương lai
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new NodePolyfillPlugin(),

    new Dotenv(),

    new ModuleFederationPlugin({
      name: "RemoteBookingRoom",
      filename: "moduleEntryBookingRoom.js",
      exposes: {
        "./BookingRoom": "./src/App.js",
        "./BookingSidebar": "./src/components/Sidebar/index.js",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "react-redux": {
          singleton: false,
          requiredVersion: deps["react-redux"], // eslint-disable-line @typescript-eslint/no-unsafe-assignment
        },
      }
      // shared: sharedDependencyConfig
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    port: 5001,
    https: false,
    historyApiFallback: true,
    allowedHosts: "all",
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        secure: false,
        changeOrigin: true,
      },
    },
  },
};
// const path = require("path");
// const HTMLWebpackPlugin = require("html-webpack-plugin");
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const deps = require("./package.json").dependencies;
// module.exports = {
//   entry: path.join(__dirname, "./src/index.js"),
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },

//   plugins: [
//     new HTMLWebpackPlugin({
//       template: "./public/index.html",
//     }),
//     new NodePolyfillPlugin(),

//         new Dotenv(),
//     new ModuleFederationPlugin({
//       name: "RemoteBookingRoom",
//             filename: "moduleEntryBookingRoom.js",
//             exposes: {
//               "./BookingRoom": "./src/App.js",
//               "./BookingSidebar": "./src/components/Sidebar/index.js",
//             },
//       shared: {
//         ...deps,
//         react: {
//           singleton: true,
//           requiredVersion: deps.react,
//         },
//         "react-dom": {
//           singleton: true,
//           requiredVersion: deps["react-dom"],
//         },
//         "react-redux": {
//           singleton: false,
//           requiredVersion: deps["react-redux"],
//         },
//       },
//     }),
//   ],
//   optimization: {
//     splitChunks: false,
//   },
//   devServer: {
//     https:false,
//     historyApiFallback: true,
//     port: 3002,
//     open: true,
//     hot: true,
//     proxy: {
//       "/api": {
//         target: "http://localhost:5000",
//         secure: false,
//       },
//     },
//     historyApiFallback: true,
//     allowedHosts: "all",
//   },
//   devtool: "inline-source-map",
//   mode: "development",

//   module: {
//     rules: [
//       {
//         test: /.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: [
//               "@babel/preset-env",
//               ["@babel/preset-react", { runtime: "automatic" }],
//             ],
//           },
//         },
//       },
//       {
//         test: /\.s[ac]ss$/i,
//         use: ["style-loader", "css-loader", "sass-loader"],
//       },
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         test: /\.(png|jp(e*)g|svg|gif)$/,
//         use: [
//           {
//             loader: "file-loader",
//             options: {
//               name: "images/[hash]-[name].[ext]",
//             },
//           },
//         ],
//       },
//       {
//         test: /\.less$/i,
//         use: [
//           {
//             loader: "style-loader",
//           },
//           {
//             loader: "css-loader", // translates CSS into CommonJS
//           },
//           {
//             loader: "less-loader", // compiles Less to CSS
//             options: {
//               lessOptions: {
//                 // If you are using less-loader@5 please spread the lessOptions to options directly
//                 modifyVars: {
//                   "white-color": "#FFFFFF",
//                   "primary-color": "#35794A",
//                   "menu-dark-color": "#FFFFFF",
//                   "menu-dark-bg": "#35794A",
//                   "menu-dark-arrow-color": "#FFFFFF",
//                   "menu-dark-inline-submenu-bg": "#000c17",
//                   "menu-dark-highlight-color": "#fff",
//                   "menu-dark-item-active-bg": "#FFFFFF",
//                   "menu-dark-selected-item-icon-color": "#35794A",
//                   "menu-dark-selected-item-text-color": "#35794A",
//                   "menu-dark-item-hover-bg": "#35794A",
//                   "menu-highlight-color": "#35794A",
//                   "menu-dark-inline-submenu-bg": "#35794A",
//                 },
//                 javascriptEnabled: true,
//               },
//             },
//           },
//         ],
//       },
//     ],
//   },
// };
