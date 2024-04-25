import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import { CssBaseline, Container } from '@mui/material';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <CssBaseline />
            <Navbar />
            <Container>
                {children}
            </Container>
        </>
    );
};

export default Layout;
