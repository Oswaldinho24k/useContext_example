import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function Login() {
    let { login, user } = useContext(UserContext)
    return (
        <div>
            {!user && <button onClick={login}>
                Inicias Sesión
        </button>}
        </div>
    )
}