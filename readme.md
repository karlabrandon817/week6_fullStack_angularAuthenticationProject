Full Stack with Auth Peer Project
=================================
![our shelf](tauShelf.png)
Built by the bananaFunction(Sherrie Bloomquist, Jacob Froman, Karla Hugo, Amanda Jopp)

Planning
--------
1. Defined the UI flow for the user
  1. Home page
    * Shelf items and splash image
    * Home/Add/Login nav
  2. Add page
    * Checks if user is currently authenticated
      * If not, redirect to Login
    * User can add a new item to the shelf by supplying a description and URL
      * On successful add, user is prompted to continue adding
        * If yes, clear inputs
        * Otherwise, redirect to Home
  3. Login page
    * User can login with username and password
      * On success, redirect to Home
      * On failure, reload Login
    * User can also register and redirect to Register page
  4. Register page
    * User can create new user with username and password
      * On success, redirects to Login
2. Planned out steps to completion
  1. Test authentication
  2. Build out home page
  3. Build out add items page
  4. Convert login and register pages to angular-route
  5. Create server route for adding an item
    * Make item model
  6. Lock adding items behind authentication
  7. Create server route for getting all items
  8. Build out home controller
  9. Build out add controller
  10. Display items on home page

![our plan](plan.JPG)

Technologies
------------
* Mongo
* Express
* Angular
* Node
* Passport
* git
* github

Project Description
-------------------
Our client, **Prime Digital Academy: Room 2**, has asked for an app to simulate the behavior of their shelf. That is, a list of items placed on the classroom shelf.

Any visitor to the page can view the shelf, but only logged in users should be able to place objects on the shelf.

This will require some research, design, an implementation. Include a readme.md that includes the names of the group members and your team name/number. As well as any planning/docs. These can be in digital format or even pics of whiteboard/notebook sketches.

Shelf Object
------------
Items placed on the shelf should have the following data:

* description
* placer (user)
* image url (optional)

Use branching and github effectively. Prioritize your tasks. We are directly modeling a work assignment and part 1 of this assignment is to have an '*EOD Push*' - **End of Day Push** to remote origin master. That is, as you wrap your day's work, merge what works to master and push to github. Incomplete or not-working code can stay on it's own branch and should not be merged to master. This branch can, however, be pushed to github so it is available in remote.


Hard Mode
----------
* only logged in users can remove objects from the shelf
* styling

Pro Mode
--------
* logged in users can only remove their objects from the shelf
* show list of users only to logged in users

Super Mode
----------
* filter output by user (click on a user to only show items by that user)
* users can re-order shelf
