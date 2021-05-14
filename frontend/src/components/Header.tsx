import { Toolbar, List, ListItem, ListItemText, IconButton, Typography, Container, Hidden, Drawer, Button } from '@material-ui/core';
import { createStyles, fade, makeStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import React, { DetailedHTMLProps, HTMLAttributes, MouseEventHandler, useState } from 'react';
import { AccountBox } from '@material-ui/icons';
import { useHistory, Link  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import firebase from 'firebase/app';

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
        list: {
            width: 250
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }),
);

export type link = { title: string, path: string };

export type category = {
    id: number,
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

    const classes = useStyles();

    const [state, setState] = useState({ right: false });

    const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
        setState({ right: open });
    }

    const sideDrawerList = (anchor: string) => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
        >
            <List component="nav">
                {links.map(({ title, path }) => (
                    <Link to={path} key={title} className={classes.linkText}>
                        <ListItem button>
                            <ListItemText primary={title} />
                        </ListItem>
                   </Link>
                ))}
            </List>
        </div>
    );

    return (
        <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer("right", true)}>
                <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={state.right} onClose={toggleDrawer("right", false)}>
                {sideDrawerList("right")}
            </Drawer>
        </>
    );
}

const Navbar = ({ title, links, categories }: Props) => {

    const classes = useStyles();

    // const history = useHistory();
    // const dispatch = useDispatch();
    // const { authenticated } = useSelector((state: RootState) => state.auth);

    // const logoutClickHandler = () => {
    //     dispatch(signout());
    // }

    return (
        <Toolbar className={classes.toolbarMain}>
            {/* removed appbar from the top*/}
            <Container maxWidth="md" className={classes.navbarDisplayFlex}>
                <Typography variant="h5" className={classes.title}>
                    <a href="/" className={classes.linkText}>{title}</a>
                </Typography>
                <Hidden smDown>
                    <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                        {links.map(({ title, path }) => (
                            <a href={path} key={title} className={classes.linkText}>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            </a>
                        ))}
                        <ListItem button>
                             <ListItemText primary="Sign Out" onClick={()=>firebase.auth().signOut()}/>
                        </ListItem>
                         {/* <Button onClick={()=>firebase.auth().signOut()}>Sign Out</Button> */}

                    </List>
                </Hidden>
                <Hidden mdUp>
                    <SideDrawer title={title} links={links} categories={categories} />
                </Hidden>
            </Container>
        </Toolbar>
    );
}

const Categories = ({ categories }: Props) => {

    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <Toolbar variant="dense" className={classes.toolbarSecondary}>
                {categories.map(({id, name, slug }, index) => (
                    <Typography color="inherit" noWrap key={index}>
                        <Link to={"/" + id + "/" + slug} className={classes.linkText}>{name}</Link>
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