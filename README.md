# FIT-JOURNAL

Are you a fitness enthusiast ? The FIT-JOURNAL is the app for you. This app allows you to store your favorites meals from the recipes that you get on the internet, your favorites exercises and also allows you to track you body composition progress just as a Fitness journal but Virtual!

### 1. Working Prototype

You can access a working prototype of the React app here: https://fit-journal-client-bl1uh6ip4.vercel.app/ and Node app here: https://obscure-plains-76776.herokuapp.com

### 2. User Stories

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

### 3. Functionality

The app's functionality includes:

- Every User has the ability to create an account
- A registered User has the ability to log in.
- A logged in User can add Body composition entries, preview all his entries, see the details, delete body composition entries or udpdate them.
- A logged in User can see his stored meals, add new meals, display details of his meals, and delete or edit meals.
- A logged in User can preview all his exercises, add new exercises, see the details of the exercises, and edit or delete exercises.
- A logged in User has the ability to log out.

### 4. Technology

- Front-End: HTML5, CSS3, JavaScript ES6, React
- Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
- Development Environment: Heroku, DBeaver

### 5. Wireframes

Landing Page
:-------------------------:
![Landing Page](/github-images/wireframes/landing-page-wireframe.png)
Register Page
![Register Page](/github-images/wireframes/sing-up-wireframe.png)
Log in Page
![Log in Page](/github-images/wireframes/sign-in-wireframe.png)
Meals List Page
![Meals List Page](/github-images/wireframes/meals-list-wireframe.png)
Exercises List Page
![Exercises List Page](/github-images/wireframes/exercises-list-wireframe.png)
Body composition List Page
![Body composition List Page](/github-images/wireframes/body-composition-list-wireframe.png)
New meal Page
![New meal Page](/github-images/wireframes/new-meal-wireframe.png)
New exercise Page
![New exercise Page](/github-images/wireframes/new-exercise-wireframe.png)
New body composition Page
![New body composition Page](/github-images/wireframes/new-body-composition-wireframe.png)
Meal details Page
![Meal details Page](/github-images/wireframes/meals-details-wireframe.png)
Exercise details Page
![Exercise details Page](/github-images/wireframes/exercise-details-wireframe.png)
Edit body composition Page
![Edit body composition Page](/github-images/wireframes/edit-body-composition-wireframe.png)
Edit exercise Page
![Edit exercise Page](/github-images/wireframes/edit-exercise-wireframe.png)
Edit meal Page
![Edit meal Page](/github-images/wireframes/edit-meal-wireframe.png)

### 6. Front-end Structure - React Components Map (to do later)

- (Example) **Index.js** (stateless)
  - **App.js** (stateful)
    - **LandingPage.js** (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the **App.js**
      - **Login.js** (stateful) -
      - **Register.js** (stateful) -
    - **Navbar.js** (stateless) -

### 7. Back-end Structure - Business Objects

- Users (database table)

  - id (auto-generated integer)
  - email (text)
  - full_name (text)
  - password (text)
  - date_created (timestamp)
  - date_updated (timestamp)

- Exercises (database table)

  - id (auto-generated integer)
  - title (text required)
  - url (text)
  - description (text)
  - date_created (timestamp)
  - user_id (integer foreign key)

- Meals (database table)

  - id (auto-generated integer)
  - title (text required)
  - url (text)
  - description (text)
  - date_created (timestamp)
  - user_id (integer foreign key)

- Users_body_composition (database table)

  - id (auto-generated integer)
  - left_arm (numeric)
  - right (numeric)
  - chest (numeric)
  - waist (numeric)
  - hips (numeric)
  - left_thigh (numeric)
  - right_calf (numeric)
  - weight (numeric)
  - body_fat (numeric)
  - date_created (timestamp)
  - date_updated (timestamp)
  - user_id (integer foreign key)

- Exercises_muscle_group (database table)

  - id (auto-generated integer)
  - exercise_id (integer foreign key)
  - muscle_id (integer foreign key)

- Body_part (database table)

  - id (auto-generated integer)
  - name (text)
  - category ( body_category as ENUM ('lower body','upper body'))
  - date_created (timestamp)

- Muscle_group (database table)
  - id (auto-generated integer)
  - name (text)
  - body_part_id (integer foreign key)
  - date_created (timestamp)

### 8. API Documentation

API Documentation details:

```text
/api
.
├── /body-compositions
│   └── GET
│       ├── /
│       ├── /chart/average
│       ├── /:id
│   └── POST
│       ├── /
│   └── PATCH
│       ├── /:id
│   └── DELETE
│       ├── /:id
├── /users
│   └── GET
│       ├── /
│   └── POST
│       └── /login/
│   └── POST
│       └── /signup/
├── /meals
│   └── GET
│       ├── /
│       ├── /:id
│       ├── /find/:query
│   └── POST
│       └── /
│   └── PATCH
│       └── /:id
│   └── DELETE
│       └── /:id
├── /exercises
│   └── GET
│       ├── /
│       ├── /:id
│       ├── /find/:query
│   └── POST
│       └── /
│   └── PATCH
│       └── /:id
│   └── DELETE
│       └── /:id
├── /body-parts
│   └── GET
│       ├── /
├── /muscle-groups
│   └── GET
│       ├── /
│       ├── /body-parts/:id
```

#### GET `/api/body-compositions/`

```js
// req.header
{
    "Authorization": "Bearer ${token}",
}

// res.body
[
    {
        "id": 7,
        "left_arm": "10",
        "right_arm": "10",
        "chest": "32",
        "waist": "25",
        "hips": "37.5",
        "left_thigh": "20.5",
        "right_thigh": "20.5",
        "left_calf": "12",
        "right_calf": "12",
        "weight": "113",
        "body_fat": "19.77",
        "date_created": "2021-01-22T00:11:25.455Z",
        "date_updated": "2021-01-26T20:37:40.864Z",
        "user_id": 1
    },
    {
        "id": 6,
        "left_arm": null,
        "right_arm": "10",
        "chest": "32",
        "waist": "25",
        "hips": "37.5",
        "left_thigh": "20.5",
        "right_thigh": "20.5",
        "left_calf": "12",
        "right_calf": "12",
        "weight": "113",
        "body_fat": "18",
        "date_created": "2021-01-22T00:11:22.509Z",
        "date_updated": "2021-01-26T20:38:06.145Z",
        "user_id": 1
    },
    {
        "id": 5,
        "left_arm": "10",
        "right_arm": "10",
        "chest": "32",
        "waist": "25",
        "hips": "37.5",
        "left_thigh": "20.5",
        "right_thigh": "20.5",
        "left_calf": "12",
        "right_calf": "12",
        "weight": "113",
        "body_fat": "20.3",
        "date_created": "2021-01-22T00:11:12.019Z",
        "date_updated": "2021-01-25T23:15:39.199Z",
        "user_id": 1
    },
   ...
]
```

#### GET `/api/body-compositions/:id`

```js
// req.header
{
    "Authorization": "Bearer ${token}",
}

// req.params
{
  id:id
}

// res.body

{
    "id": 1,
    "left_arm": "10",
    "right_arm": "10",
    "chest": "32",
    "waist": "25",
    "hips": "37.5",
    "left_thigh": "20.5",
    "right_thigh": "20.5",
    "left_calf": "12",
    "right_calf": "12",
    "weight": "113",
    "body_fat": "20.3",
    "date_created": "2020-12-31T02:10:42.853Z",
    "date_updated": "2021-01-21T23:51:13.948Z",
    "user_id": 1
}


```

#### GET `/api/body-compositions/chart/average`

```js
// req.header
{
    "Authorization": "Bearer ${token}",
}

// res.body
[
  {
        "to_char": "December  2020",
        "weight": "111.5000000000000000",
        "body_fat": "18.9500000000000000"
    },
    {
        "to_char": "January   2021",
        "weight": "113.0000000000000000",
        "body_fat": "20.3000000000000000"
    },
   ...
]
```

#### POST `/api/body-compositions/`

```js
// req.header
{
    "Authorization": "Bearer ${token}",
}

// req.body

  {
    "left_arm": "10",
    "right_arm": "10",
    "chest": "32",
    "waist": "25",
    "hips": "37.5",
    "left_thigh": "20.5",
    "right_thigh": "20.5",
    "left_calf": "12",
    "right_calf": "12",
    "weight": "113",
    "body_fat": "20.3"
}

// res.body

  {
    "id": 1,
    "left_arm": "10",
    "right_arm": "10",
    "chest": "32",
    "waist": "25",
    "hips": "37.5",
    "left_thigh": "20.5",
    "right_thigh": "20.5",
    "left_calf": "12",
    "right_calf": "12",
    "weight": "113",
    "body_fat": "20.3",
    "date_created": "2020-12-31T02:10:42.853Z",
    "date_updated": "2021-01-21T23:51:13.948Z",
    "user_id": 1
}

```

#### PATCH `/api/body-compositions/:id`

```js
// req.header
{
    "Authorization": "Bearer ${token}",
}

// req.body
{
  id: id
}
// res.body

  {
    "left_arm": "13",
    "right_arm": "13",
    "chest": "32",
    "waist": "25",
    "hips": "37.5",
    "left_thigh": "20.5",
    "right_thigh": "20.5",
    "left_calf": "12",
    "right_calf": "12",
    "weight": "113",
    "body_fat": "20.3"
}

// res.body

  {

}

```

#### Delete `/api/body-compositions/:id`

```js
// req.header
{
    "Authorization": "Bearer ${token}",
}

// req.params
{
  id:id
}

// req.body

  {

}

// res.body

  {

}

```

#### GET `/api/users/

```js
// req.header
{
    "Authorization": "Bearer ${token}",
}

// res.body

{
    "full_name": "Dunder Mifflin"
}


```

#### POST `/api/users/login`

```js

// req.body


  {
    "email": "dunder@gmail.com",
"password": "password"
}


// res.body


{
    "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2MTE4Nzk2NzUsInN1YiI6ImR1bmRlckBnbWFpbC5jb20ifQ.ku3rU1lGeWVEUvA-_NWDQoM7hauIZU1V4K0EmPgMwlY"
}


```

#### POST `/api/users/signup`

```js

// req.body

{
"email": "test@gmail.com",
"full_name": "test name",
"password": "testpassword"
}



// res.body


{
    "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2MTE4Nzk2NzUsInN1YiI6ImR1bmRlckBnbWFpbC5jb20ifQ.ku3rU1lGeWVEUvA-_NWDQoM7hauIZU1V4K0EmPgMwlY"
}


```

#### GET `/api/meals/

```js
// req.header
{
    "Authorization": "Bearer ${token}",
}

// res.body
[
    {
        "id": 4,
        "title": "Pollo and Pinto mini tacos",
        "url": "https://mealprepmanual.com/pollo-and-pinto-mini-tacos/",
        "description": "Mini tacos with chicken and pinto beans",
        "date_created": "2020-12-31T02:10:42.853Z",
        "user_id": 1
    },
    {
        "id": 1,
        "title": "pumpkin protein cookies",
        "url": "https://www.burnthefatblog.com/healthy-pumpkin-spice-protein-cookies/",
        "description": "High protein pumpkin cookies 2",
        "date_created": "2020-12-31T02:10:42.853Z",
        "user_id": 1
    },
    ...
]


```

#### GET `/api/meals/:id`

```js
// req.header
{
    "Authorization": "Bearer ${token}",
}

// req.params
{
  id: id
}

// res.body
[
    {
        "id": 4,
        "title": "Pollo and Pinto mini tacos",
        "url": "https://mealprepmanual.com/pollo-and-pinto-mini-tacos/",
        "description": "Mini tacos with chicken and pinto beans",
        "date_created": "2020-12-31T02:10:42.853Z",
        "user_id": 1
    },
    {
        "id": 1,
        "title": "pumpkin protein cookies",
        "url": "https://www.burnthefatblog.com/healthy-pumpkin-spice-protein-cookies/",
        "description": "High protein pumpkin cookies 2",
        "date_created": "2020-12-31T02:10:42.853Z",
        "user_id": 1
    },
    ...
]


```

#### GET `/api/meals/find/:query`

```js
// req.header
{
    "Authorization": "Bearer ${token}",
}

// req.params
{
  query: query
}

// res.body

   [
    {
        "id": 1,
        "title": "pumpkin protein cookies",
        "url": "https://www.burnthefatblog.com/healthy-pumpkin-spice-protein-cookies/",
        "description": "High protein pumpkin cookies 2",
        "date_created": "2020-12-31T02:10:42.853Z",
        "user_id": 1
    }
]


```

#### POST `/api/meals/`

```js

// req.header
{
    "Authorization": "Bearer ${token}",
}
// req.body

{
{"title":"Grilled chicken breats",
"url": "https://www.onceuponachef.com/recipes/perfectly-grilled-chicken-breasts.html",
"description": "A grilled chicken recipe"}
}



// res.body


{
    "id": 11,
    "title": "Grilled chicken breats",
    "url": "https://www.onceuponachef.com/recipes/perfectly-grilled-chicken-breasts.html",
    "description": "A grilled chicken recipe",
    "date_created": "2021-01-30T03:30:20.570Z",
    "user_id": 1
}


```

#### PATCH `/api/meals/:id`

```js
// req.header
{
    "Authorization": "Bearer ${token}",
}

// req.params
{
  id: id
}

// req.body

{
    "title":"Grilled chicken breats 2",
    "url": "https://www.onceuponachef.com/recipes/perfectly-grilled-chicken-breasts.html",
    "description": "A grilled chicken recipe 2"
}

```

#### DELETE `/api/meals/:id`

```js
// req.header
{
    "Authorization": "Bearer ${token}",
}



// res.body

{
}

```

#### GET `/api/exercises/

```js
// req.header
{
    "Authorization": "Bearer ${token}",
}

// res.body
[
  {
        "id": 1,
        "title": "squat",
        "url": "https://www.runtastic.com/blog/en/squat-4-common-squat-mistakes-avoid/",
        "description": "regural squats",
        "date_created": "2020-12-31T02:10:42.853Z",
        "user_id": 1
    },
    {
        "id": 27,
        "title": "squat",
        "url": "https://www.youtube.com/watch?v=U3HlEF_E9fo",
        "description": "exercise to better legs",
        "date_created": "2021-01-26T04:12:00.191Z",
        "user_id": 1
    },
    {
        "id": 28,
        "title": "squat",
        "url": "https://www.youtube.com/watch?v=U3HlEF_E9fo",
        "description": "exercise to better legs",
        "date_created": "2021-01-26T04:12:00.802Z",
        "user_id": 1
    },
    ...
]


```

#### GET `/api/exercises/:id`

```js
// req.header
{
    "Authorization": "Bearer ${token}",
}

// req.params
{
  id: id
}

// res.body
{
    "id": 28,
    "title": "squat",
    "url": "https://www.youtube.com/watch?v=U3HlEF_E9fo",
    "description": "exercise to better legs",
    "exercises_muscle_group": [
        {
            "id": 10,
            "name": "upper chest",
            "body_part_id": 1
        }
    ]
}


```

#### GET `/api/exercises/find/:query`

```js
// req.header
{
    "Authorization": "Bearer ${token}",
}

// req.params
{
  query: query
}

// res.body

   [
    {
        "id": 27,
        "title": "squat",
        "url": "https://www.youtube.com/watch?v=U3HlEF_E9fo",
        "description": "exercise to better legs",
        "exercises_muscle_group": [
            {
                "id": 10,
                "name": "upper chest",
                "body_part": {
                    "id": 1,
                    "name": "chest"
                }
            }
        ]
    },
    {
        "id": 28,
        "title": "squat",
        "url": "https://www.youtube.com/watch?v=U3HlEF_E9fo",
        "description": "exercise to better legs",
        "exercises_muscle_group": [
            {
                "id": 10,
                "name": "upper chest",
                "body_part": {
                    "id": 1,
                    "name": "chest"
                }
            }
        ]
    },
    {
        "id": 1,
        "title": "squat",
        "url": "https://www.runtastic.com/blog/en/squat-4-common-squat-mistakes-avoid/",
        "description": "regural squats",
        "exercises_muscle_group": [
            {
                "id": 1,
                "name": "calves",
                "body_part": {
                    "id": 5,
                    "name": "legs"
                }
            },
            {
                "id": 2,
                "name": "hamstrings",
                "body_part": {
                    "id": 5,
                    "name": "legs"
                }
            },
            {
                "id": 3,
                "name": "quadriceps",
                "body_part": {
                    "id": 5,
                    "name": "legs"
                }
            },
            {
                "id": 4,
                "name": "glutes",
                "body_part": {
                    "id": 5,
                    "name": "legs"
                }
            }
        ]
    },
    ...
]


```

#### POST `/api/exercises/`

```js

// req.header
{
    "Authorization": "Bearer ${token}",
}
// req.body

{
    "title":"squat",
    "muscle_ids": [ {
      "muscle_group_id": 10
    }],
    "url": "https://www.youtube.com/watch?v=U3HlEF_E9fo",
    "description": "exercise to better legs"}


```

#### PATCH `/api/exercises/:id`

```js
// req.header
{
    "Authorization": "Bearer ${token}",
}

// req.params
{
  id: id
}

// req.body

{
   {
     "title":"squat",
     "muscle_ids": [ {
      "muscle_group_id": 2
      },{
      "muscle_group_id": 1
     }],
    "url": "https://www.youtube.com/watch?v=U3HlEF_E9fo",
    "description": "exercise to work legs"}
}

```

#### DELETE `/api/exercises/:id`

```js
// req.header
{
    "Authorization": "Bearer ${token}",
}



// res.body

{
}

```

#### GET `/api/body-parts/`

```js
// req.header
{
    "Authorization": "Bearer ${token}",
}

// res.body
[
    {
        "id": 1,
        "name": "chest",
        "category": "upper body",
        "date_created": "2020-12-31T02:10:42.853Z"
    },
    {
        "id": 2,
        "name": "back",
        "category": "upper body",
        "date_created": "2020-12-31T02:10:42.853Z"
    },
    {
        "id": 3,
        "name": "arms",
        "category": "upper body",
        "date_created": "2020-12-31T02:10:42.853Z"
    },
   ...
]
```

#### GET `/api/muscle-groups/`

```js
// req.header
{
    "Authorization": "Bearer ${token}",
}

// res.body
[
   {
        "id": 1,
        "name": "calves",
        "body_part_id": 5,
        "date_created": "2020-12-31T02:10:42.853Z"
    },
    {
        "id": 2,
        "name": "hamstrings",
        "body_part_id": 5,
        "date_created": "2020-12-31T02:10:42.853Z"
    },
    {
        "id": 3,
        "name": "quadriceps",
        "body_part_id": 5,
        "date_created": "2020-12-31T02:10:42.853Z"
    },
   ...
]
```

#### GET `/api/muscle-groups/body-parts/:id`

```js
// req.header
{
    "Authorization": "Bearer ${token}",
}

// req.params
{
  id:id
}

// res.body
[

    {
        "id": 10,
        "name": "upper chest",
        "body_part_id": 1,
        "date_created": "2020-12-31T02:10:42.853Z"
    },
    {
        "id": 11,
        "name": "middle chest",
        "body_part_id": 1,
        "date_created": "2020-12-31T02:10:42.853Z"
    },
    {
        "id": 12,
        "name": "lower chest",
        "body_part_id": 1,
        "date_created": "2020-12-31T02:10:42.853Z"
    },
   ...
]
```

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
