### Installed Packages

1. npx create-react-app movie_rating_app
2. npm install redux react-redux @reduxjs/toolkit
3. npm install axios
4. npm install react-router-dom
5. npm install node-sass --save

### Project Diagram

[\images\projectDiagrams]

### API Used

OMDB API

### Difference between Redux and Redux Toolkit state

1. In Redux Toolkit it uses a internal libray called imme for the mutability. In this we just take the state and update the property we wanted to update. ( state, { payload })

2. In Redux we used to do ...state and then we need to add the new state. {...state, payload}
