import { defineConfig } from 'cypress';

export default defineConfig({
  env: {
    baseUrl: 'http://localhost:3000',
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
