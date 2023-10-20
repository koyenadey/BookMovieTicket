import React, { ReactNode } from 'react';
import NavBar from '../NavBar';
import SearchBar from '../SearchBar';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}:LayoutProps) =>{
    return(
    <>
        <SearchBar />
        <NavBar />
        {children}
    </>
    );
}

export default Layout;