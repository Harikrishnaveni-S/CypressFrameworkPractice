module.exports = {
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    video: true,
    // reporterOptions: {
    //   charts: true,
    //   reportPageTitle: 'AutomationTestReport',
    //   embeddedScreenshots: true,
    //   inlineAssets: true,
    //   saveAllAttempts: false,
    // },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

  env: {
    RegisterURL: "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
    URL: "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  }
};
