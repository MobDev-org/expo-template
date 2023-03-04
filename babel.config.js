module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['.'],
                    alias: {
                        '@': './src',
                    },
                    extensions: ['.js', '.ts', '.tsx', '.ios.js', '.android.js'],
                },
            ],
        ],
        env: {
            production: {
                plugins: ['transform-remove-console'],
            },
        },
    };
};
