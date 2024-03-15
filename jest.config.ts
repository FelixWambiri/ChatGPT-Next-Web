import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  preset: "ts-jest",
  moduleNameMapper: {
    '^.+\\.(svg)$': '<rootDir>/__mocks__/svgMock.tsx',
  },
  transform: {
    '^.+\\.svg$': "<rootDir>/fileTransformer.js",
  },

}

export default createJestConfig(config)