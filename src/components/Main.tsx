import { Box } from '@material-ui/core';
import React, { ReactNode } from 'react';
import Header from './Header';
import IconButton from '@material-ui/core/IconButton';
import { AccountBox } from '@material-ui/icons';

type Props = { readonly children: ReactNode }

const Main = (props: Props) => {

    const links = [
        { title: "Projects", path: "/projects" },
        { title: "About", path: "/about" },
        { title: "Log In", path: "/login" },
        { title: "Sign Up", path: "/signup" },
        { title: "Profile", path: "/profile" }
    ];

    const categoryCardList = [
        {
            id : 1,
            name: "Design",
            description: "laskdjflas",
            slug: "/design"
        },
        {
            id : 2,
            name: "Art",
            description: "laskdjflas",
            slug: "/art"
        },
        {
            id : 3,
            name: "Video",
            description: "laskdjflas",
            slug: "/video"
        },
        {
            id : 4,
            name: "Music",
            description: "laskdjflas",
            slug: "/music"
        },
        {
            id : 5,
            name: "Tech",
            description: "laskdjflas",
            slug: "/tech"
        },
        {
            id : 6,
            name: "Other",
            description: "laskdjflas",
            slug: "/other"
        }
    ];


    return (
        <div>
            <Header title="Projectry" links={links} categories={categoryCardList} />
            <Box m={5}>
                {props.children}
            </Box>
        </div>
    );

}

export default Main;