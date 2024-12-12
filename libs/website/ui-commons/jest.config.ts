/* eslint-disable */
export default {
  displayName: 'website-ui-commons',
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/website/ui-commons',
  preset: '../../../jest.preset.js',
};
