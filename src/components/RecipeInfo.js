import React from "react";
import { Container, TextField, Tooltip } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';


const RecipeInfo = (props) => {
  // const name = props.match.params.name
  // const recipe = props.recipe.find(c => c.name == name);

  return (
    
<Container className="recipe-container">
 <h2> <span className="recipe-description-span">Recipe Name: </span>{/* recipe.recipe_name */}</h2>
 <h4> <span className="recipe-description-span">Cuisine Type: </span>{/* recipe.cuisine_type */}</h4>
 <h4> <span className="recipe-description-span">Cook Time: </span>{/* recipe.total_cook_time */}</h4>
 <h4> <span className="recipe-description-span">Ingredients: </span>

 <TextField
 id="outlined-textarea"
 label="Edit ingredients info"
 placeholder="Edit ingredients info"
 multiline
 variant="outlined"
/>
<Tooltip title="Save">
<SaveIcon className="edit-recipe-icon"/>
</Tooltip>
</h4>

 <h4> <span className="recipe-description-span">Directions: </span>

 <TextField
 id="outlined-textarea"
 label="Edit directions info"
 placeholder="Edit directions info"
 multiline
 variant="outlined"
 tooltip="Save"
/>
<Tooltip title="Save">
<SaveIcon className="edit-recipe-icon"/>
</Tooltip></h4>
</Container>
  );
};


export default RecipeInfo;

