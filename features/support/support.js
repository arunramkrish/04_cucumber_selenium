// // This Cucumber.js tutorial support file to perform validations and initialization for our app // //
const { setWorldConstructor } = require('@cucumber/cucumber')
 
const seleniumWebdriver = require('selenium-webdriver');
 
var firefox = require('selenium-webdriver/firefox');
 
var chrome = require('selenium-webdriver/chrome');
const { setDefaultTimeout } = require('@cucumber/cucumber');
 
class CustomWorld {
  constructor() {
    this.variable = 0;
 
    this.driver = new seleniumWebdriver.Builder()
                  .forBrowser('chrome')
                  .build();
  }
}
 
setWorldConstructor(CustomWorld);
 
module.exports = function() {
 
  this.World = CustomWorld;
 
  this.setDefaultTimeout(60 * 1000);
}