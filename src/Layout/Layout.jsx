import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/">Каталог</NavLink>
                </nav>
            </header>
            <Outlet />
        </>
    );
};

export default Layout;