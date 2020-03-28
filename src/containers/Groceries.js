import { connect } from 'react-redux';
import Groceries from '../components/Groceries'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        recipe: state.recipe
    }
}

export default connect(mapStateToProps)(Groceries)