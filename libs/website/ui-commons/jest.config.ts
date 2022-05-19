export default {
  displayName: 'website-ui-commons',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/website/ui-commons',
  preset: '../../../jest.preset.js',
};
