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
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
