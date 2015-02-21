# Sky test

###User stories
  * U1 - Create a page that show the project name and the author
  * U2 - Show a login form with username and password and a login button, when the user click login redirect to a "logged in" page
  * U3 - Allow only user 'user' to be logged in
  * U4 - Allow users 'manager', 'admin', 'developer', 'tester' to be logged in
  * U5 - Make username case insensitive
  * U6 - Allow only user with password 'password' to be logged in
  * U7 - Add a logout button (which logs the user out)
  * U8 - Redirect to the home page when a user logout
  * U9 - Record login attempt with the following characteristics
    * IP
    * Datetime (unix timestamp format)
    * Action (should be one of AUTH_SUCCESS or AUTH_FAILURE)
    * Username
  * U10 - Create a json feed with the login attempt restricted to the admin user
  