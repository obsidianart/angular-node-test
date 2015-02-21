/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.banner = element(by.css('#banner'));

  this.footer = element(by.css('footer.footer'));

  this.main = element(by.css('#main'));

  this.loginForm = this.main.element(by.css('form'));
  this.loginButton = this.loginForm.element(by.css('.btn-login'))
};

module.exports = new MainPage();
