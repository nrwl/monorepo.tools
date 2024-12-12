/* eslint-disable */
export default {
  displayName: 'website-ui-home',
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/website/ui-home',
  preset: '../../../jest.preset.js',
};
