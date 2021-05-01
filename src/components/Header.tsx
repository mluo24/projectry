import { Toolbar, List, ListItem, ListItemText, IconButton, Typography, Container, Link, Hidden, Drawer } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import React, { DetailedHTMLProps, HTMLAttributes, MouseEventHandler, useState } from 'react';

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
    }),
);

export type link = { title: string, path: string };

export type category = {
    id : number,
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

    const toggleDrawer = (anchor : string, open : boolean) => (event : any) => {
        setState({ right: open });
    }

    const sideDrawerList = (anchor : string) => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            >
            <List component="nav">
                {links.map(({ title, path }) => (
                <a href={path} key={title} className={classes.linkText}>
                    <ListItem button>
                    <ListItemText primary={title} />
                    </ListItem>
                </a>
                ))}
            </List>
        </div>
    );

    return (
        <>
            {/* onClick={toggleDrawer("right", true)}*/}
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

    // const categoryList: string[] = ["Category 1", "Category 2", "Category 3", "Category 4"];

    return (
        <Container maxWidth="md">
            <Toolbar variant="dense" className={classes.toolbarSecondary}>
                {categories.map(({ name, slug }, index) => (
                    <Typography color="inherit" noWrap key={index}>
                        <Link href={slug} className={classes.linkText} underline="none">{name}</Link>
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