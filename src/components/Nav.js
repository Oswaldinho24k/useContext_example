import React, { useContext } from 'react'
import { Menu, Icon } from 'antd'
import { MenuContext } from '../context/MenuContext'
import { UserContext } from '../context/UserContext'
let SubMenu = Menu.SubMenu


export default function Nav({ }) {
    let { openMenu } = useContext(MenuContext)
    let { user, logout } = useContext(UserContext)
    return (
        <div>
            <Menu theme="dark" mode="horizontal" >
                <Menu.Item
                    onClick={openMenu}
                ><Icon type="menu-fold" /></Menu.Item>
                <Menu.Item>Home</Menu.Item>
                <SubMenu title="SubMenu">
                    <Menu.Item>SubMenuItem</Menu.Item>
                </SubMenu>
                {user && <Menu.Item>
                    <img
                        style={{ width: 50, borderRadius: "50%" }}
                        src={user.pic}
                    />
                </Menu.Item>}
                {user && <Menu.Item
                    onClick={logout}
                >
                    Cerrar Sesión
                </Menu.Item>}
            </Menu>
        </div>
    )
}