import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { ReactNode, useEffect, useState } from 'react';
import Header, { category } from './Header';
// import IconButton from '@material-ui/core/IconButton';
// import { AccountBox } from '@material-ui/icons';

type Props = { readonly children: ReactNode }

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
    flexStuff: {
        display: 'flex',
        justifyContent: "space-between"
    }
}));

const Main = (props: Props) => {

    const classes = useStyles();

    const links = [
        { title: "Projects", path: "/projects" },
        //{ title: "Log In", path: "/login" },
       // { title: "Sign Up", path: "/signup" },
        { title: "Profile", path: "/profile" },
        { title: "Message", path: "/message" },
        { title: "Project+", path: "/create-project"}
    ];

    // const categoryCardList = [
    //     {
    //         id: 1,
    //         name: "Design",
    //         description: "Description placeholder",
    //         slug: "/projects/design"
    //     },
    //     {
    //         id: 2,
    //         name: "Art",
    //         description: "Description placeholder",
    //         slug: "/projects/art"
    //     },
    //     {
    //         id: 3,
    //         name: "Video",
    //         description: "Description placeholder",
    //         slug: "/projects/video"
    //     },
    //     {
    //         id: 4,
    //         name: "Music",
    //         description: "Description placeholder",
    //         slug: "/projects/music"
    //     },
    //     {
    //         id: 5,
    //         name: "Tech",
    //         description: "Description placeholder",
    //         slug: "/projects/tech"
    //     },
    //     {
    //         id: 6,
    //         name: "Other",
    //         description: "Description placeholder",
    //         slug: "/projects/other"
    //     }
    // ];

    const [categories, setCategories] = useState<category[]>([]);

    useEffect(() => {
        axios.get<category[]>('/getCategories').then(response => {
            setCategories(response.data);
        })
    }, [categories]);


    return (
        <div className={classes.root}>
            <Header title="Projectry" links={links} categories={categories} />
            <Box m={5}>
                {props.children}
            </Box>
            <footer className={classes.footer}>
                <Container maxWidth="md" className={classes.flexStuff}>
                    <Typography variant="body1">Made for Trends in Web Development by Taerim and Miranda</Typography>
                    <div>
                        &copy; 2021
                </div>
                </Container>
            </footer>
        </div>
    );

}

export default Main;