import { connect } from 'react-redux'
import Recipes from '../components/Recipes'
import { getAllRecipes, addRecipe } from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        recipes: state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addRecipe: (recipe) => dispatch(addRecipe(recipe)),
       //updateRecipe: (recipe) => dispatch(updateRecipe(recipe)),
       getAllRecipes: () => dispatch(getAllRecipes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);