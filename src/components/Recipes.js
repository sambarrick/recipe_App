import React, { Fragment } from "react";
import MaterialTable from "material-table";

export default function Recipes(props) {
 
    console.log('initial', props.recipes)
  const [state, setState] = React.useState({
      
    columns: [
      { title: "ID", field: "id", type: "numeric" },
      { title: "Recipe Name", field: "recipe_name" },
      { title: "Cuisine Type", field: "cuisine_type" },
      { title: "Cook Time", field: "total_cook_time" },
      { title: "Description", field: "recipe_description" }
        // lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
      
    ],


   data: [],

  });
  
  props.recipes.length === 0 ? props.getAllRecipes() : 
  setTimeout(() => { //setTimeout only hits ONCE, which is why the state
    // is only being set once.

    setState(prevState => {
        const data = props.recipes;
        // data.push(props.recipes);
        return { ...prevState, data };
    });
  }, 600);

  return (
      <Fragment>
      {console.log('secondary', props.recipes)}
    <MaterialTable
      title="Recipes"
      columns={state.columns}
      data={state.data}
      
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
      
    />
      </Fragment>
  );
}