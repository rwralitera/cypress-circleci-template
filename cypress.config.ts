import { defineConfig } from 'cypress';

export default defineConfig({
  responseTimeout: 60000,
  defaultCommandTimeout: 30000,
  projectId: 'XXXXX',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporterOpts.json',
  },
  viewportWidth: 1280,
  viewportHeight: 800,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    baseUrl: 'https://example.cypress.io/',
    specPattern: 'cypress//**/**/*.spec.ts',
  },
});
