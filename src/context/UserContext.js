import React, { useState } from 'react'

let UserContext = React.createContext()
let { Provider, Consumer } = UserContext

function UserProvider({ children }) {
    let [user, setUser] = useState(null)

    function login() {
        setUser({
            name: "BlisS",
            pic: "https://miro.medium.com/fit/c/240/240/0*jp3IFb08Sy3_k3N_."
        })
    }
    function logout() {
        setUser(null)
    }

    return (<Provider value={{ user, login, logout }}>
        {children}
    </Provider>)
}

export { UserProvider, Consumer as UserConsumer, UserContext }