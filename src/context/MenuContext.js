import React, { useState } from 'react'

let MenuContext = React.createContext()
let { Provider, Consumer } = MenuContext

function MenuProvider({ children }) {
    let [show, setShow] = useState(true)
    function closeMenu() {
        setShow(false)
    }
    function openMenu() {
        setShow(true)
    }
    return (
        <Provider value={{ show, openMenu, closeMenu }}>
            {children}
        </Provider>
    )
}

export { MenuProvider, Consumer as MenuConsumer, MenuContext }
