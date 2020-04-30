import React, { Fragment } from "react";
import MaterialTable from "material-table";


export default function Recipes(props) {

  
  const [state, setState] = React.useState({
      
    columns: [
      { title: "Recipe Name", field: "recipe_name"}, 
      { title: "Cuisine Type", field: "cuisine_type" },
      { title: "Cook Time", field: "total_cook_time" },
      { title: "Ingredients", field: "ingredients" },
      { title: "Directions", field: "directions" }
    ], 

   data: [],

  });
  
  props.recipes.length === 0 ? props.getAllRecipes() : 
  setTimeout(() => { //setTimeout only hits ONCE, which is why the state
    // is only being set once.

    setState(prevState => {
        const data = props.recipes;
        return { ...prevState, data };
    });
  }, 600);

  return (
    <Fragment>
    <MaterialTable
      title= "My Recipes"
      columns={state.columns}
      data={state.data}
      actions={[
        {
          icon: 'search',
          tooltip: 'View Recipe',
          onClick: (e, rowData) => {
            console.log(e.target);
            console.log(rowData);
            // Do save operation
            props.getRecipeById(rowData.id);
            props.history.push(`/recipes/${rowData.id}`)
          }
        }
      ]}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
             {props.addRecipe(newData)}
            }, 600);
            setTimeout(() => {
              {props.getAllRecipes()}
            }, 600)
          }),

        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
               {props.updateRecipe(newData)}
            }, 600);
              setTimeout(() => {
               {props.getAllRecipes()}
            }, 600)
          }),

        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              {props.deleteRecipe(oldData)}
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
            setTimeout(() => {
              {props.getAllRecipes()}
            }, 600)
          }),
      }}
      
      
    />
    
      </Fragment>
  );
}