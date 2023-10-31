import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    baseUrl: "http://localhost:3000",
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "./cypress/e2e/*.e2e.{js,jsx,ts,tsx}",
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    specPattern: "./cypress/components/*.cy.{js,jsx,ts,tsx}",
  },
});