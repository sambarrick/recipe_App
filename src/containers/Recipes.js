import { connect } from 'react-redux'
import Recipes from '../components/Recipes'
import { addRecipe,removeRecipe,getAllRecipes } from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        recipes: state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addRecipe: () => dispatch(addRecipe()),
        removeRecipe: () => dispatch(removeRecipe()),
       getAllRecipes: () => dispatch(getAllRecipes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);