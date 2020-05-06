import React from "react";
import { Container, TextField, Tooltip, Button } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import { Link } from "react-router-dom";

const RecipeInfo = (props) => {

  const [state, setState] = React.useState({
    ingredients: "",
    directions: ""
  });


  props.recipes.length === 0 ? props.getAllRecipes() : 
  console.log("data already exists for recipe")

  const id = props.match.params.id
  const recipez = props.recipes.find(c => c.id == id);
  console.log(state, "did it work?")

  if(props.recipes.length> 0){

  return (
    
    
<Container className="recipe-container">
 <h2> <span className="recipe-description-span">Recipe Name: </span>{ recipez.recipe_name }</h2>
 <h4> <span className="recipe-description-span">Cuisine Type: </span>{ recipez.cuisine_type }</h4>
 <h4> <span className="recipe-description-span">Cook Time: </span>{ recipez.total_cook_time }</h4>
 <h4> <span className="recipe-description-span">Ingredients: </span>

 <TextField
 id="outlined-textarea"
 label="Edit ingredients info"
 placeholder="Edit ingredients info"
 multiline
 variant="outlined"
 value={state.ingredients}
 onChange={ (e) => { setState({
    ingredients: e.target.value
 })
 } }
/>
<Tooltip title="Save">
<SaveIcon className="edit-recipe-icon" //onClick={props.updateRecipe(recipe)}
/>
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

<Link to="/recipes">
<Button className="back-to-recipes">
Back to Recipes
</Button>
</Link>
</Container>
  );
  } else {
    return <div></div> //dummy placeholder
  }
};


export default RecipeInfo;