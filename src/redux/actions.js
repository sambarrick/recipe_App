export const login = () => {
  return {
      type: 'LOG_IN',
      value: true
  }
}

export const logout = () => {
  return {
      type: 'LOG_OUT',
      value: false
  }
}

export const addRecipe = (recipe) => {
  return dispatch => {
    fetch("/recipes", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
      recipe_name: recipe.recipe_name,
      cuisine_type: recipe.cuisine_type,
      total_cook_time: recipe.total_cook_time,
      recipe_description: recipe.recipe_description
      })})
      .then(response => {
      response.json()
      }).then(function(body) {
      console.log('clientside post: ' + body);
      })
      .catch(error => console.log(error))
      }
}

export const removeRecipe = (index) => {
  return {
      type: 'REMOVE_RECIPE',
      value: index
  }
}

export const getAllRecipes = () => {
    return dispatch => {
      fetch("/recipes")
        .then(res => res.json())
        .then(response => {
          const action = {
            type: "FETCH_RECIPES",
            value: response
          };
          dispatch(action);
        })
      .catch(error => console.log(error));
  } 
}
