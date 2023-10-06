import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  collectCoverage: true,
  // on node 14.x coverage provider v8 offers good speed and more or less good report
  coverageProvider: 'v8',
  collectCoverageFrom: [
    './src/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    '!./src/*.test.{js,jsx,ts,tsx}',
    '!./src/**/*.test.{js,jsx,ts,tsx}',
  ],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',

    // Handle various font import
    '@next/font/(.*)': require.resolve('next/dist/build/jest/__mocks__/nextFontMock.js'),

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.ts',

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/i': `<rootDir>/__mocks__/fileMock.ts`,

    // Handle module aliases
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  // Add more setup options before each test is run
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts'
  ],
  testRegex: "(/watch/web/__tests__/.*|(\\.|/)(test|spec))\\.(jsxxxx?|tsx?)$",
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/cypress/',
    '<rootDir>/dist/',
    '<rootDir>/coverage/',
    '<rootDir>/node_modules/',
    '<rootDir>/out/'
  ],
  testEnvironment: 'jsdom',
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$'
  ]
};

export default config;
