const {assert} = require('chai');
const {buildItemObject} = require('../test-utils');

describe('User visits the single-item page', () => {
  describe('posts a new item', () => {


    it('clicks on the new item and is redirected to the single-item page', () => {
      const itemToCreate = buildItemObject();

      //create the item first
      browser.url('/items/create');
      browser.setValue('#title-input', itemToCreate.title);
      browser.setValue('#description-input', itemToCreate.description);
      browser.setValue('#imageUrl-input', itemToCreate.imageUrl);
      browser.click('#submit-button');
      // go home and click the item card
      browser.url('/');
      browser.click('.item-card a');

      assert.include(browser.getText('body'), itemToCreate.title);
      assert.include(browser.getText('body'), itemToCreate.description);
      assert.include(browser.getAttribute('body img', 'src'), itemToCreate.imageUrl);
    });
  });
});