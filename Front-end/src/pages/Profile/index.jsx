import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfile } from '../../redux/user';
import store from '../../redux/store';
import Account from "./../../components/Account"
import Editable from '../../components/Editable';

//Se charge du rendu du tableau de bord
function Profile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const isConnected = (useSelector(state => state.login.isConnected))

    //Redirige vers la page de connexion si l'utilisateur n'est pas connecté
    const checkLogged = () => {
        if (!isConnected) {
            navigate("/signIn");
        }   
    }

    useEffect(() => {
        checkLogged(store);
        dispatch(fetchProfile(store));
    });
    
    const data = [
        { id: 1, title: "Argent Bank Checking (x8349)", amount: "$2,082.79", description: "Available Balance", linkPath: "/transactions", transButton: "View transactions" },
        { id: 2, title: "Argent Bank Savings (x6712)", amount: "$10,928.42", description: "Available Balance", linkPath: "/transactions", transButton: "View transactions" },
        { id: 3, title: "Argent Bank Credit Card (x8349)", amount: "$184.30", description: "Current Balance", linkPath: "/transactions", transButton: "View transactions" },
      ];

    return (
        <main className="main bg-dark">
            <Editable />
            {data.map((item) => (   
                    <Account key={item.id} props={item}/>
                ))}
        </main>    
    )
};

export default Profile;