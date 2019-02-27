module.exports = {
    mode: "development",
    entry: {
        index: "./src/index"
    },
    output: {
        filename: "[name].js"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                },{
                    loader: "ts-loader"
                }
                ],
                exclude: /node_modules/
            }
        ]
    }
}
