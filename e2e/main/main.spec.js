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
});
