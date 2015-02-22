# Sky test
**I'm preferring e2e test when possible**. This is a choice and can be discussed. e2e test are closer to the final user, but slower to run (one among various reason pro or against e2e). For a small project like this one speed isn't an issue.

###To run the project:
    $bower install and npm install
    $mongod -dbpath data/db
    $grunt serve

###To run unit tests
     $grunt test

###To run e2e tests:
     $grunt test:e2e

###To build the project
    $grunt

###NOTE
  * Users are created when the server starts (every user present is removed, check with BA story U3 and U4).
  * Logs should probably be a capped collection http://docs.mongodb.org/ecosystem/use-cases/storing-log-data/#rta-storing-log-data-capped-collections


###User stories
  * U1 - Create a page that show the project name and the author
  * U2 - Show a login form with username and password and a login button, when the user click login redirect to a "logged in" page
  * U3 - Allow only user 'user' with password 'password' to be logged in
  * U4 - Allow users 'manager', 'admin', 'developer', 'tester' to be logged in
  * U5 - Make username case insensitive
  * U6 - Removed and done with U3
  * U7 - Add a logout button (which logs the user out) and Redirect to the home page
  * U8 - Removed and done with U7
  * U9 - Record login attempt with the following characteristics
    * IP
    * Datetime (unix timestamp format)
    * Action (should be one of AUTH_SUCCESS or AUTH_FAILURE)
    * Username
  * U10 - Create a json feed with the login attempt restricted to the admin user
  * U11 - Prevent non logged user to go to the welcome page