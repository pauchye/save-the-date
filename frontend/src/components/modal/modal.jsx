import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ProfileDropDown from '../user/profile_dropdown';
import { logout } from '../../actions/session_actions';
import './modal.scss'
const mSTP = state => {
    return {
        modal: state.ui.modal
    }
}

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout())
    }
}

function Modal({modal, closeModal}){
    if(!modal){
        return null
    }

    let component;
    switch (modal) {
      case "profileDropDown":
        component = <ProfileDropDown closeModal={closeModal}/>;
        break;
      default:
        return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

export default connect(mSTP, mDTP)(Modal)