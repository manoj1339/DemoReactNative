module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                alias: {
                    '@assets': './src/assets',
                    '@contexts': './src/contexts',
                    '@screens': './src/screens',
                    '@styles': './src/styles',
                    '@routes': './src/routes',
                    '@services': './src/services',
                    '@hooks': './src/hooks',
                    '@shared': './src/shared',
                    '@components': './src/components',
                    '@images': './src/images',
                    '@utils': './src/utils',
                    '@types': './src/types',
                    '@hoc': './src/hoc',
                },
            },
        ],
        'react-native-reanimated/plugin',
    ],
};
