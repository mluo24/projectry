import { AppBar, Toolbar, List, ListItem, ListItemText, IconButton, Typography, Container, Link } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            display: `flex`,
            flexGrow: 1,
        },
        navbarDisplayFlex: {
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: 'center'
        },
        navDisplayFlex: {
            display: `flex`,
            justifyContent: `space-between`
        },
        linkText: {
            textDecoration: `none`,
            textTransform: `none`,
            color: 'black'
        },
        toolbarSecondary: {
            justifyContent: "space-between"
        },
        toolbarMain: {
            borderBottom: `1px solid ${theme.palette.grey[300]}`
        },
    }),
);

type link = { title: string, path: string };

type category = {
    name: string,
    description: string,
    slug: string
}

type Props = {
    readonly title: string,
    readonly links: link[],
    readonly categories: category[]
};

const SideDrawer = ({ title, links }: Props) => {

    const [state, setState] = useState({ right: false }) // Add this
    // const toggleDrawer = (anchor, open) => event : React.MouseEventHandler => {
    //     if (
    //     event.type === "keydown" &&
    //     (event.key === "Tab" || event.key === "Shift")
    //     ) {
    //     return
    //     }
    //     setState({ [anchor]: open })
    // }

    const classes = useStyles();

    // const [state, setState] = useState({ right: false }) // Add this
    // const toggleDrawer = (anchor: string, open: boolean) => (event : MouseEvent<HTMLButtonElement>) => {
    //     if (
    //     event.type === "keydown" &&
    //     (event.key === "Tab" || event.key === "Shift")
    //     ) {
    //     return
    //     }
    //     setState({ [anchor]: open })
    // }


    return (
        <>
            {/* onClick={toggleDrawer("right", true)}*/}
            <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu"
            >
                <MenuIcon />
            </IconButton>
        </>
    );
}

const Navbar = ({ title, links, categories }: Props) => {

    const classes = useStyles();

    return (
        <Toolbar className={classes.toolbarMain}>
            {/* removed appbar from the top*/}
            <Container maxWidth="md" className={classes.navbarDisplayFlex}>
                <Typography variant="h5" className={classes.title}>
                    <a href="/" className={classes.linkText}>{title}</a>
                </Typography>
                <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                    {links.map(({ title, path }) => (
                        <a href={path} key={title} className={classes.linkText}>
                            <ListItem button>
                                <ListItemText primary={title} />
                            </ListItem>
                        </a>
                    ))}
                </List>
                <SideDrawer title={title} links={links} categories={categories} />
            </Container>
        </Toolbar>
    );
}

const Categories = ({ categories }: Props) => {

    const classes = useStyles();

    // const categoryList: string[] = ["Category 1", "Category 2", "Category 3", "Category 4"];

    return (
        <Container maxWidth="md">
            <Toolbar variant="dense" className={classes.toolbarSecondary}>
                {categories.map(({ name, slug }, index) => (
                    <Typography color="inherit" noWrap key={index}>
                        <Link href={slug}>{name}</Link>
                    </Typography>
                ))}
            </Toolbar>
        </Container>
    );
}

const Header = ({ title, links, categories }: Props) => {
    return (
        <>
            <Navbar title={title} links={links} categories={categories} />
            <Categories title={title} links={links} categories={categories} />
        </>
    );
}

export default Header;