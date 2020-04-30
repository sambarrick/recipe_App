import React from "react";
import { Container } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';

const RecipeInfo = (props) => {
  // const name = props.match.params.name
  // const recipe = props.recipe.find(c => c.name == name);

  return (
    
<Container className="recipe-container">
 <h2>Hello</h2>
 <h4><EditIcon className="edit-recipe-icon" /> <span className="recipe-description-span">Cuisine Type: </span></h4>
 <h4><EditIcon className="edit-recipe-icon"/> <span className="recipe-description-span">Cook Time: </span></h4>
 <h4><EditIcon className="edit-recipe-icon"/> <span className="recipe-description-span">Ingredients: </span></h4>
 <h4><EditIcon className="edit-recipe-icon"/> <span className="recipe-description-span">Directions: </span></h4>
</Container>
  );
};


export default RecipeInfo;

