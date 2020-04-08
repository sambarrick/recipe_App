import { connect } from 'react-redux';
import Signup from "../components/Signup"
import { addUser, getAllUsers } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        recipes: state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsers: () => dispatch(getAllUsers()),
        addUser: user => dispatch(addUser(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)

