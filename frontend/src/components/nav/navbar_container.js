import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar.jsx';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  // debugger;
  return {
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user
  }
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
})


export default connect(
  mapStateToProps,
  // { logout }
  mDTP
)(NavBar);