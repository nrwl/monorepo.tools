/* eslint-disable */
export default {
  displayName: 'website-ui-typescript',
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/website/ui-typescript',
  preset: '../../../jest.preset.js',
};
