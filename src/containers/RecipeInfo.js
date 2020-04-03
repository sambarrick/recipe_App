import { connect } from 'react-redux';
import RecipeInfo from '../components/RecipeInfo'

const mapStateToProps = (state) => {
    return {
        recipe: state.recipe
    }
}

export default connect(mapStateToProps)(RecipeInfo)