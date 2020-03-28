import { connect } from 'react-redux';
import Signup from "../components/Signup"

const mapStateToProps = (state) => {
    return {
        user: state.user,
        recipe: state.recipe
    }
}

export default connect(mapStateToProps)(Signup)