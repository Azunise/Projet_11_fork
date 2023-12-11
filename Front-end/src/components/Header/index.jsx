import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/login';
import store from '../../redux/store';
import logo from './../../assets/argentBankLogo.png';

//Le header permet de naviguer vers /signin si déconnecté, /profile si connecté, et dans ce cas il offre la possibilité de se déconnecter
function Header() {
    const dispatch = useDispatch();
    const userName = (useSelector((state) => state.user.userName));

    //Déconnecte l'utilisateur et vide le store des informations personelles
    const handleSignOut = () => {  
        dispatch(logOut(store));
    };

    return (
        <header>
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div className="main-nav-navlinks">
                    {!(useSelector(state => state.login.isConnected)) ? (
                    <NavLink to= "/signIn">
                        <span className="fa fa-user-circle right bigger-fa"></span>
                        Sign In
                    </NavLink>
                    ) : (
                        <>
                            <NavLink className="main-nav-item" to="/profile">
                                <i className="fa fa-user-circle bigger-fa"></i>
                                {userName}
                            </NavLink>
                            <NavLink onClick={handleSignOut} className="main-nav-item" to="/">
                                <i className="fa fa-sign-out bigger-fa"></i>
                                Sign Out
                        </NavLink>
                        </>
                    )} 
                </div>
            </nav>
        </header>
   );
};

export default Header;