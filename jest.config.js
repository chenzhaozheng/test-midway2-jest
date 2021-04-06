const path = require('path');
const { defaults } = require('jest-config');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/test/fixtures'],
  coveragePathIgnorePatterns: ['<rootDir>/test/'],
  // forceExit: true,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  // collectCoverageFrom: ['**/src/**/*.{js,ts}'],
  // moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
};
