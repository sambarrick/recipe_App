import { connect } from 'react-redux'
import NavigationLoggedIn from '../components/NavigationLoggedIn'
import { addRecipe, updateRecipe, getAllRecipes } from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        recipes: state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addRecipe: () => dispatch(addRecipe()),
        //updateRecipe: () => dispatch(updateRecipe()),
       getAllRecipes: () => dispatch(getAllRecipes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLoggedIn);