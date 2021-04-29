import { Box } from '@material-ui/core';
import React, { ReactNode } from 'react';
import Header from './Header';

type Props = { readonly children: ReactNode }

const Main = (props: Props) => {

    const links = [
        { title: "Categories", path: "/" },
        { title: "Projects", path: "/projects" },
        { title: "About", path: "/about" },
        { title: "Log In", path: "/login" },
        { title: "Sign Up", path: "/signup" }
    ];

    return (
        <div>
            <Header title="Projectry" links={links} />
            <Box m={5}>
                {props.children}
            </Box>
        </div>
    );

}

export default Main;