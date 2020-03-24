import { combineReducers } from "redux";

const user = (state = null) => state;

const recipes = (state = [], action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return [...state, action.value];
    case "REMOVE_RECIPE":
      const recipe = [...state];
      recipe.splice(action.value, 1);
      return recipe;
    case "FETCH_RECIPES":
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({ user, recipes });
