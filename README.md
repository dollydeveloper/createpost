# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Responsive Post Management Web Application

This project is a responsive web application built using ReactJS. It allows users to create and edit posts. The application consists of two main screens: a Posts Display Screen and a Create Post Screen.

## Features
Posts Display Screen:
    Showcases all created posts.
    Each post includes an option to edit.
    A button at the bottom redirects users to the Create Post Screen.
Create Post Screen:
    Allows users to create new posts.
    Supports editing of existing posts.
    Validates input to ensure both title and content are provided.

## Installation

Clone the repository:
git clone https://github.com/varadevipriya/createpost.git
cd post-management-app

##  Install dependencies:
npm install

## Start the application:
npm start
Open your browser and navigate to http://localhost:3000 to see the application in action.

## Project Structure
    src
    components
    Home.js: The Posts Display Screen.
    CreatePost.js: The Create Post Screen.
    PostItem.js: A component to display individual posts.
    redux
    postSlice.js: Redux slice for managing post state.
    App.js: Main component that sets up routes.
    index.js: Entry point for the React application.
    styles
    CreatePost.css: Styles for the Create Post Screen.
    PostItem.css: Styles for the PostItem component.
    App.css: Global styles for the application.
## Usage
    ## `Posts Display Screen`:

    This screen will display all the created posts.
    Each post has an "Edit" button that allows the user to edit the post.
    There is a "Create" button at the bottom that redirects to the Create Post Screen.
    Create Post Screen:

    Users can create new posts by filling out the title and content fields and clicking the "Create" button.
    Users can edit existing posts. The title and content fields will be pre-filled with the post's data when accessed via the "Edit" button from the Posts Display Screen.
    Upon successful creation or update of a post, the user is redirected back to the Posts Display Screen.
    ##`State Management`
    Redux is used for state management to handle the posts data across the application.
    localStorage is used to persist the state of the form inputs for title and content to ensure data is not lost on page reloads.
    ## Navigation
    React Router is used for handling navigation between the Posts Display Screen and the Create Post Screen.
    Users can navigate to the Create Post Screen by clicking the "Create" button on the Posts Display Screen.
    After creating or editing a post, users are redirected back to the Posts Display Screen.



## Contact
    For any questions or feedback, please reach out to `devipriya.akkineni123@gmail.com`.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

