import { connect } from 'react-redux';
import Dash from './dash';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        state: state
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         smth: () => dipatch(smth())
//     }
// }

export default connect(mapStateToProps ,null)(Dash);
