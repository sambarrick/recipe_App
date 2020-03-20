import { connect } from 'react-redux';
import Home from '../components/Home'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        recipe: state.recipe
    }
}

export default connect(mapStateToProps)(Home)