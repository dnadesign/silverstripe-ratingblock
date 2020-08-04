module.exports = {
    plugins: [
        require('postcss-inline-svg')({
            paths: [
                './src/svg'
            ]
        }),
        require('autoprefixer')
    ]
};
