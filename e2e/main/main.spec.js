'use strict';

describe('Main View', function() {
  var page;

  beforeEach(function() {
    browser.get('/');
    page = require('./main.po');
  });

  it('should show the project name', function() {
    expect(page.banner.getText()).toBe('Sky test');
  });

  it('should show the project author', function() {
    expect(page.footer.getText()).toBe('Stefano Solinas - ObsidianArt');
  });

  describe ('with login form',function(){
    it('should show an input field for the user name', function() {
      var usernameField = page.loginForm.element(by.model('user.name'))
      expect(usernameField.isDisplayed()).toBeTruthy();
    });

    it('should show an input field for the password', function() {
      var passwordField = page.loginForm.element(by.model('user.password'))
      expect(passwordField.isDisplayed()).toBeTruthy();
    });

    it('should display a login button', function() {
      expect(page.loginButton.isDisplayed()).toBeTruthy();
    });

    it('should login the user when the button is pressed', function() {
      page.loginButton.click().then(function(){
        expect(browser.getCurrentUrl()).toContain('welcome')
      })
    });
  })

});