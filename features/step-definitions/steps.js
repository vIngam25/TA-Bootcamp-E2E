const { Given, And, When, Then } = require("@wdio/cucumber-framework");

Given("I am on the home page", async () => {
  await browser.url("https://www.newegg.com/");
});

Then("I close the promo banner if it appears", async () => {
  try {
    const promo = await $(
      "#modal-Website > div.modal-dialog.modal-dialog-centered > div > button"
    );
    await promo.click();
  } catch (error) {
    console.error(error);
  }
});

When("I enter the word {string} in the search bar", async (tosearch) => {
  const search = await $("input[type=search]");
  await search.waitForExist();
  await search.setValue(tosearch);
});

Then("I click the search", async () => {
  const click = await $(".header2021-search-button>button");
  await click.click();
});

When("I check that at least one item appears", async () => {
  const item = await $("#item_cell_32-351-756_1_0");
  await item.waitForExist();
});

When('I open "Today\'s Best Deals" tab', async () => {
  const tab = await $("#trendingBanner_720202");
  await tab.waitForExist();
  await tab.click();
});

When("I click on the Internet shop logo", async () => {
  const logo = await $("div.header2021-logo");
  await logo.waitForExist();
  await logo.click();
});

When("I check that main page opened", async () => {
  await expect(browser).toHaveUrl("https://www.newegg.com/");
});
