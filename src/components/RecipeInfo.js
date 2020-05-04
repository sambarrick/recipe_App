import React from "react";
import { Container } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';

const RecipeInfo = (props) => {
  // const name = props.match.params.name
  // const recipe = props.recipe.find(c => c.name == name);

  return (
    
<Container className="recipe-container">
 <h2> <span className="recipe-description-span">Recipe Name: </span>{/* recipe.recipe_name */}</h2>
 <h4> <span className="recipe-description-span">Cuisine Type: </span>{/* recipe.cuisine_type */}</h4>
 <h4> <span className="recipe-description-span">Cook Time: </span>{/* recipe.total_cook_time */}</h4>
 <h4> <span className="recipe-description-span">Ingredients: </span>{/* recipe.ingredients */}<EditIcon className="edit-recipe-icon"/></h4>
 <h4> <span className="recipe-description-span">Directions: </span>{/* recipe.directions */}<EditIcon className="edit-recipe-icon"/></h4>
</Container>
  );
};


export default RecipeInfo;

