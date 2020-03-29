import { combineReducers } from "redux";

const user = (state = null) => state;

const recipes = (state = [], action) => {
  switch (action.type) {
    case "FETCH_RECIPES":
      return action.value;
    case "GET_RECIPE_BY_ID":
      return action.value;
    case "ADD_RECIPE":
      return [...state, action.value];
    case "UPDATE_RECIPE":
      return [...state, action.value];
    default:
      return state;
    case "DELETE_RECIPE":
      const recipe = [...state];
      recipe.splice(action.value, 1);
      return recipe;
  }
};

export default combineReducers({ user, recipes });
