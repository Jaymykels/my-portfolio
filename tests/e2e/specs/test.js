// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  "display's hello world": browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible("#app", 5000)
      .assert.containsText(".title-big", "HELLO WORLD")
      .assert.elementCount("img", 5)
      .end();
  }
};
