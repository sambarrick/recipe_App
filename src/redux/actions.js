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
  return {
      type: 'ADD_RECIPE',
      value: recipe
  }
}

export const removeRecipe = (index) => {
  return {
      type: 'REMOVE_RECIPE',
      value: index
  }
}

