const path = require("path");

const Dirs = {
    SRC: "src",
    BUILD: "build",
    STATIC: "static",
};

const Paths = {
    SRC: path.join(__dirname, Dirs.SRC),
    BUILD: path.join(__dirname, Dirs.BUILD),
    STATIC: path.join(__dirname, Dirs.STATIC),
};

const commonConfig = {
    entry: {
        app: path.join(Paths.SRC, 'client.jsx'),
    },
    output: {
        path: Paths.BUILD,
        publicPath: Dirs.STATIC,
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [],
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    }
};

const productionConfig = () => commonConfig;

const developmentConfig = () => {
    const config = {
        devServer: {
            // Display only errors to reduce the amount of output.
            stats: "errors-only",
            // 0.0.0.0 is available to all network devices
            // unlike default `localhost`.
            host: process.env.HOST, // Defaults to `localhost`
            port: process.env.PORT, // Defaults to 8080
        },
    };

    return Object.assign({}, commonConfig, config);
};

module.exports = env => {
    if (env === "production") {
        return productionConfig();
    }

    return developmentConfig();
};