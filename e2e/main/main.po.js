/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.banner = element(by.css('#banner'));
  this.footer = element(by.css('footer.footer'));
  this.main = element(by.css('#main'));

  var loginForm = this.main.element(by.css('form'));

  this.loginForm = {
  	username: loginForm.element(by.model('user.name')),
    password: loginForm.element(by.model('user.password')),
  	button: loginForm.element(by.css('.btn-login'))
  }

  this.doLogin = function(username, password) {
    this.loginForm.username.sendKeys(username);
    this.loginForm.password.sendKeys(password);

    return this.loginForm.button.click();
  }

  this.logoutButton = element(by.css('.btn-logout'));

  this.doLogout = function() {
    return this.logoutButton.click();
  }

  this.adminJsonLogFeed = element(by.css('a[href^="/api/log"]'));
};

module.exports = new MainPage();

