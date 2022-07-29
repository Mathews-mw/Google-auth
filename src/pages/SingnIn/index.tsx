import React, { useState } from 'react';

import { GoogleLogo } from 'phosphor-react';
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from '../../services/firebase';

import './styles.scss'

function SignIn() {

    const [user, setUser] = useState<User>({} as User) 
    
    function handleGoogleSignIn() {
        const provider = new GoogleAuthProvider();
        
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => console.error(error))
    }
    
    return( 
        <div className="container">
           
            <div className='user'>
            {user.photoURL && <img src={user.photoURL} alt="Foto de perfil do usuário" />}
            <strong>{user.displayName}</strong>
            <small>{user.email}</small>
            </div>

            <h1>Acesse sua conta</h1>
            
            <span>Use sua conta do Google para fazer a autenticação. A autenticação através do Google é seguro, simples e rápido.</span>

            <button type="button" className="button" onClick={handleGoogleSignIn}>
                <GoogleLogo /> 
                Acessar com Google
                </button>
        </div>   
    )
}

export default SignIn;

