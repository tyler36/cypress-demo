const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: true,
  videosFolder: 'logs/e2e/videos',
  screenshotOnRunFailure: true,
  screenshotsFolder: 'logs/e2e/screenshots',
})
