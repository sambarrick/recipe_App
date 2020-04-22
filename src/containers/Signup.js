import { connect } from 'react-redux';
import Signup from "../components/Signup"
import { addUser, getAllUsers } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsers: () => dispatch(getAllUsers()),
        addUser: (first_name, last_name, email, password) => dispatch(addUser(first_name, last_name, email, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)