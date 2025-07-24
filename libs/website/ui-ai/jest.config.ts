/* eslint-disable */
export default {
  displayName: 'website-ui-ai',
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/website/ui-ai',
  preset: '../../../jest.preset.js',
};
