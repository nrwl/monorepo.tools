/* eslint-disable */
export default {
  displayName: 'website-feature-analytics',
  globals: {},
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/website/feature-analytics',
  preset: '../../../jest.preset.js',
};
