import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from "../../assets/space_4x.png"

 import OpenModalMenuItem from './OpenModalMenuItem';
 import SignupFormModal from '../SignupFormModal';



function Navigation({ isLoaded }) {

    const sessionUser = useSelector((state) => state.session.user);

    return (

        <div className='navigation-content'>
            <div className='logo-container'>
                <img src={logo} alt="Logo" className="logo-image" />
                <NavLink exact to="/" className="logo">BnB</NavLink>
            </div>
            {isLoaded && (
                <div className='right-navigation-section'>
                    {sessionUser && (
                        <NavLink exact to="/spots/new" className="create-spot-text">
                            Create A New Spot
                        </NavLink>
                    )}
                    <div className='profile-button'>
                        <ProfileButton user={sessionUser} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navigation;

