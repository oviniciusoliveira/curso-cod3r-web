import './Nav.css'
import NavItem from './NavItem'
import React from 'react'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <NavItem icon="home" label="Início" url=""/>
            <NavItem icon="users" label="Usuários" url="users"/>
        </nav>
    </aside>