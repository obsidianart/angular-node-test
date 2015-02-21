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
      expect(page.loginForm.username.isDisplayed()).toBeTruthy();
    });

    it('should show an input field for the password', function() {
      expect(page.loginForm.password.isDisplayed()).toBeTruthy();
    });

    it('should display a login button', function() {
      expect(page.loginForm.button.isDisplayed()).toBeTruthy();
    });

    it('should not login when no user is inserted', function() {
      page.loginForm.button.click().then(function(){
        expect(browser.getCurrentUrl()).not.toContain('welcome')
      })
    });

    it('should not login an unknown user', function() {
      page.doLogin('random','').then(function(){
        expect(browser.getCurrentUrl()).not.toContain('welcome')
      })
    });

    it('should not login an unknown user with an existing password', function() {
      page.doLogin('random','password').then(function(){
        expect(browser.getCurrentUrl()).not.toContain('welcome')
      })
    });

    it('should login the user "user" with password "password" ', function() {
      page.doLogin('user','password').then(function(){
        expect(browser.getCurrentUrl()).toContain('welcome')
      })
    });

    it('should be case insentive in the username', function() {
      page.doLogin('uSeR','password').then(function(){
        expect(browser.getCurrentUrl()).toContain('welcome')
      })
    });

    it('should login the user "manager" with password "password" ', function() {
      page.doLogin('manager','password').then(function(){
        expect(browser.getCurrentUrl()).toContain('welcome')
      })
    });

    it('should login the user "admin" with password "password" ', function() {
      page.doLogin('admin','password').then(function(){
        expect(browser.getCurrentUrl()).toContain('welcome')
      })
    });

    it('should login the user "developer" with password "password" ', function() {
      page.doLogin('developer','password').then(function(){
        expect(browser.getCurrentUrl()).toContain('welcome')
      })
    });

    it('should login the user "tester" with password "password" ', function() {
      page.doLogin('tester','password').then(function(){
        expect(browser.getCurrentUrl()).toContain('welcome')
      })
    });

    it('should allow a user to logout and redirect to the homepage ', function() {
      page.doLogin('user','password').then(function(){
        expect(page.logoutButton.isDisplayed()).toBeTruthy();
        page.doLogout().then(function(){
          expect(browser.getCurrentUrl()).not.toBe('welcome')
        })
      })
    });
  })

});