# FIT-JOURNAL

An App to store physical proccess, favorites meals and exercises

### 1. Working Prototype (to do later)

(Example) You can access a working prototype of the React app here: https://your-app-client.herokuapp.com/ and Node app here: https://your-app-server.herokuapp.com/

### 2. User Stories (to do now)

This app is for two types of users: a visitor and a logged-in user

###### Landing Page (Importance - High) (Est: 1h)

- as a visitor
- I want to understand what I can do with this app (or sign up, or log in)
- so I can decide if I want to use it

###### Login Page (Importance - High) (Est: 3h)

- As a returning register user
- I want to enter my password and username to use this app,
- So I can have access to my account.

###### Sign Up (Importance - High) (Est: 3h)

- As a visitor
- I want to register to use this app
- So I can create a personal account.

###### Home Page (Importance - Medium) (Est: 2h)

- As a logged-in user,
- I want to be able to preview the content of the app,
- So i can decide what section I want to navigate to.

###### Exercise List Page (Importance - High) (Est: 2h)

- As a logged-in user,
- I want to be able to preview all the exercises that I have added,
- find an exercise by a keyword,
- So I can decide which exercise to open.
- I would like to be able to add a new exercise.

###### Exercise details page (Importance - High) (Est: 2h)

- As a logged-in user,
- I want to be able to see the title, the url and the description of the selected exercise.
- Also, I want to be able to delete or edit the exercise.

###### Exercise edit page (Importance - Medium) (Est: 2h)

- As a logged-in user,
- I want to be able to preview the title, url and description,
- So I can decide what to edit.

###### Exercise add page (Importance - High) (Est: 2h)

- As a logged-in user,
- I want to introduce the title, the url, and the description of the exercise,
- So I can save it.

###### Body progress Page (Importance - High) (Est: 2h)

- As a logged-in user,
- I want to be see all my body composition entries,
- So I can decide which to open to see details.

###### Body composition details page (Importance - High) (Est: 2h)

- As a logged-in user,
- I want to be able to preview the measurements of my arms, chest, waist, hips, thighs, calves, my weight, body fat percent, and the date of that entry.
- Also, I would like to be able to delete or edit that entry.

###### Body composition edit page (Importance - High) (Est: 2h)

- As a logged-in user,
- I want preview all my body composition details,
- So I can decide what to edit.

###### Body composition add page (Importance - Medium) (Est: 2h)

- As a logged-in user,
- I want to add the measurement of my left and right arms, chest, waist, hips, left and right thighs and calves, current weight and body fat percent,
- So I can save it.

###### Meals List page (Importance - Medium) (Est: 2h)

- As a logged-in user,
- I want preview all my stored meals,
- I want to search meals by query,
- I would like to be able to select a meal to see details.

###### Meals details page (Importance - Medium) (Est: 2h)

- As a logged-in user,
- I want to see the title, a link and description of my meal,
- I want to be able to delete or edit the meal

###### Meal edit page (Importance - Medium) (Est: 2h)

- As a logged-in user,
- I want to see the title, a link and description of the selected meal,
- So I can be able to edit it.

###### Meals add page (Importance - Medium) (Est: 2h)

- As a logged-in user,
- I want to be able to add the title, a link and description of my meal and save it.

### 3. Functionality (to do now)

The app's functionality includes:

- (Example) Every User has the ability to create an account

### 4. Technology

- Front-End: HTML5, CSS3, JavaScript ES6, React
- Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
- Development Environment: Heroku, DBeaver

### 5. Wireframes (to do now)

Landing Page
:-------------------------:
![Landing Page](/github-images/wireframes/landing-page-wireframe.png)
Register Page
![Register Page](/github-images/wireframes/sing-up-wireframe.png)
Log in Page
![Log in Page](/github-images/wireframes/sign-in-wireframe.png)

### 6. Front-end Structure - React Components Map (to do later)

- (Example) **Index.js** (stateless)
  - **App.js** (stateful)
    - **LandingPage.js** (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the **App.js**
      - **Login.js** (stateful) -
      - **Register.js** (stateful) -
    - **Navbar.js** (stateless) -

### 7. Back-end Structure - Business Objects (to do later)

- (Example) Users (database table)
  - id (auto-generated)
  - username (email validation)
  - password (at least 8 chars, at least one alpha and a special character validation)

### 8. API Documentation (to do later)

API Documentation details:

- (Example) get all users

### 9. Screenshots (to do later)

(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/screenshots/landing-page-screenshot.png)
Register Page
![Register Page](/github-images/screenshots/register-page-screenshot.png)

### 10. Development Roadmap (to do later)

This is v1.0 of the app, but future enhancements are expected to include:

- (Example) add more functionality

### 11. How to run it (done)

Use command line to navigate into the project folder and run the following in terminal

##### Local React scripts

- To install the react project ===> npm install
- To run react (on port 3000) ===> npm start
- To run tests ===> npm run test

##### Local Node scripts

- To install the node project ===> npm install
- To migrate the database ===> npm run migrate -- 1
- To run Node server (on port 8000) ===> npm run dev
- To run tests ===> npm run test
