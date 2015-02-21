# Sky test
**I'm preferring e2e test when possible**. This is a choice and can be discussed. e2e test are closer to the final user, but slower to run (one among various reason pro or against e2e). For a small project like this one speed isn't an issue.

###To run the project:
    $bower install and npm install
    $mongod -dbpath data/db
    $grunt serve

###To run e2e tests:
     $grunt test:e2e

###To run unit tests (server only, frontend has only e2e tests):
     $grunt test:server

###NOTE
  For testing and local execution fake data (seed.js) with the users has been created. To let those user log-in in a real system the database should be popolate correctly.

###User stories
  * U1 - Create a page that show the project name and the author
  * U2 - Show a login form with username and password and a login button, when the user click login redirect to a "logged in" page
  * U3 - Allow only user 'user' with password 'password' to be logged in
  * U4 - Allow users 'manager', 'admin', 'developer', 'tester' to be logged in
  * U5 - Make username case insensitive
  * U6 - Removed and done with U3
  * U7 - Add a logout button (which logs the user out)
  * U8 - Redirect to the home page when a user logout
  * U9 - Record login attempt with the following characteristics
    * IP
    * Datetime (unix timestamp format)
    * Action (should be one of AUTH_SUCCESS or AUTH_FAILURE)
    * Username
  * U10 - Create a json feed with the login attempt restricted to the admin user
  
Known bug:
  grunt build expect unit test in the client part and crash when trying to build.