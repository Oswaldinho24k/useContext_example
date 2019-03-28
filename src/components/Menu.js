import React, { useContext } from 'react'
import { Drawer } from 'antd'
import { MenuContext } from '../context/MenuContext'

export default function Menu() {
    let { show, closeMenu } = useContext(MenuContext)
    return (
        <div>
            <Drawer
                title="Basic Drawer"
                placement={"left"}
                closable={true}
                onClose={closeMenu}
                visible={show}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    )
}