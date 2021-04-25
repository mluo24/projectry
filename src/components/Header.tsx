import { AppBar, Toolbar, List, ListItem, ListItemText, IconButton, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `none`,
        color: `white`
    }
  }),
);

type link = {title : string, path : string};

type Props = {
    readonly links : link[]
};

const Navbar = ({links} : Props) => {

    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                <a href="/" className={classes.linkText}>Projectry</a>
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
            </Toolbar>
        </AppBar>
    );
}

const Header = ({links} : Props) => {
    return (
        <Navbar links={links}/>
    );
}

export default Header;