/* This Cucumber.js tutorial file contains the step definition or the description of each of the behavior that is expected from the application */
"use strict";
const { Given, When, Then } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
 
const assert = require('assert')
 
const webdriver = require('selenium-webdriver');

setDefaultTimeout(20 * 1000);

// // The step definitions are defined for each of the scenarios // //
 
// // The “given” condition for our test scenario // //
Given(/^I have visited the Selenium official web page on "([^"]*)"$/, function (url, next) {
    
    this.driver.get('https://www.selenium.dev').then(next);
 
});
 
// // The “when” condition for our test scenario // //
  When(/^There is a title on the page as "([^"]*)"$/, function (titleMatch, next) {
    this.driver.getTitle()
      .then(function(title) {
        console.log("Title " + title);
        assert.strictEqual(title, titleMatch, next, 'Expected title to be ' + titleMatch);
        return title;
      });
    });

// // The “then” condition for our test scenario // //
Then(/^I should be able to click Search in the sidebar$/, function (text, next) {
     this.driver.findElement({ id: 'searchText' }).click();
     this.driver.findElement({ id: 'searchText' }).sendKeys(text).then(next);
  });