import { AppBar, Toolbar, List, ListItem, ListItemText, IconButton, Typography, Container } from '@material-ui/core';
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

type link = {title : string, path : string};

type Props = {
    readonly title : string
    readonly links : link[]
};


const SideDrawer = ({title, links} : Props) => {

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
        {/* {onClick={toggleDrawer("right", true)}} */}
        <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
        </IconButton>
        </>
    );
}

const Navbar = ({title, links} : Props) => {

    const classes = useStyles();

    return (
            <Toolbar className={classes.toolbarMain}>
                 {/* removed appbar from the top*/}
                <Container maxWidth="md" className={classes.navbarDisplayFlex}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
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
                </Container>
            </Toolbar>
    );
}

const Categories = () => {

    const classes = useStyles();

    const categoryList : string[] = ["Category 1", "Category 2", "Category 3", "Category 4"];

    return (
        <Container maxWidth="md">
            <Toolbar variant="dense" className={classes.toolbarSecondary}>
            {categoryList.map(c => (
                <Typography color="inherit" noWrap key={c}>
                {c}
                </Typography>
            ))}
            </Toolbar>
        </Container>
    );
}

const Header = ({title, links} : Props) => {
    return (
        <>
            <Navbar title={title} links={links}/>
            <Categories />
        </>
    );
}

export default Header;