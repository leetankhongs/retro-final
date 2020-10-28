import React from 'react';
import { AppBar, Fab, IconButton, Toolbar, Typography, withStyles } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './styles'
 const Header = (props)=> {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start"  color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Material UI
                    </Typography>
                    <Fab color="primary" size="small">
                        <PersonIcon />
                    </Fab>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(Header);
