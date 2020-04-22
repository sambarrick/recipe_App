import React from "react";
import { Container } from "@material-ui/core";

const RecipeInfo = (props) => {
  // const recipeName = props.match.params.recipeName;
  // const recipe = props.recipe.find((c) => c.recipeName == recipeName);

  return (
    
    <Container className="recipe-container">
<h1>Recipe Info here</h1>
         
        </Container>
  );
};

// <h2>{recipe.recipe_name}</h2>
//          <h4><span className="recipe-description-span">Cuisine Type: </span>{recipe.cuisine_type}</h4>
//          <h4><span className="recipe-description-span">Cook Time: </span>{recipe.total_cook_time}</h4>
//          <h4><span className="recipe-description-span">Ingredients: </span>{recipe.ingredients}</h4>
//           <h4><span className="recipe-description-span">Directions: </span>{recipe.directions}</h4>

export default RecipeInfo;