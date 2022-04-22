module.exports = {
  displayName: 'website-ui-commons',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/website/ui-commons',
  preset: '../../../jest.preset.ts',
};
