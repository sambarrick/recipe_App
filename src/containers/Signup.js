import { connect } from 'react-redux';
import Signup from "../components/Signup"
import {addUser} from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => dispatch(addUser(user))
    }
}

const mapStateToProps = (state) => {
    return {
        usersTotal: state.user.length
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

