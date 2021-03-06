import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button"
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import Logo from "../images/shopLogo.png"
import Dropdown from './dropdown';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: "#fbf7ed",
        paddingRight: "calc(4% + 9px)",
        paddingLeft: "calc(4% + 9px)",
        
    },
    title:{
        flexGrow: 1,
        marginLeft: "1%",
        marginRight: "5%",
        color: theme.palette.secondary.main,
        "&:hover": {
            cursor: "pointer",
        },
    },
    toolbar: {
        alignItems: 'center'
    },
    button: {
        color: theme.palette.secondary.main, 
        fontFamily: 'Arizonia, cursive', 
        "fontWeight": 600, 
        textTransform: 'none', 
        fontSize: "200%",
        "&:hover": {
            transform: "scale3d(1.15, 1.15, 0.60)",
            color: theme.palette.secondary.roseGold
        },
    },
    logo: {
        width: "121px",
        height: "35px",
    },
    logoGrid: {
        marginRight: "3.5%"
    },
    dropdown: {
        marginRight: "1%"
    },
    trial: {
        marginLeft: "0",
        marginRight: "0",
        backgroundColor: "#008060",
        textTransform: 'none',
        fontWeight: "900",
        color: "white",
        "&:hover": {
            backgroundColor: "#004c3f",
        },
    },
    rightNavButtons: {
        textTransform: 'none',
        fontSize: "115%",
        fontWeight: "500"
    }
  
}));


const ElevationScroll = (props) => {
  const { children, window } = props;
  

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};


const NavBar = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const homeLink = () =>{ 
        let path = `/`; 
        history.push(path);
    }

    const shopifyLink = () => {
        let path = `/`; 
        history.push(path);
    }

    return (
        <div>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar className={classes.root} >
                    <Toolbar className={classes.toolbar}>
                        <Grid container >
                            <Grid item xs={12} sm={6} md={2} lg={1} className={classes.logoGrid}>
                                <a href="https://www.shopify.com/" style={{display: "inline-flex", padding: "0", width: "121px"}}>
                                    <img 
                                    className={classes.logo} 
                                    src={Logo}
                                    alt="shopify logo link home"
                                    href="shopify.com"
                                    />
                                </a>
                            </Grid>
                            <Grid item className={classes.dropdown}>
                                <Dropdown name="Start" />                                               
                            </Grid>
                            <Grid item className={classes.dropdown}>
                                <Dropdown name="Sell" />                                               
                            </Grid>
                            <Grid item className={classes.dropdown}>
                                <Dropdown name="Market" />                                               
                            </Grid>
                            <Grid item className={classes.dropdown} style={{marginRight: "26%"}}>
                                <Dropdown name="Manage" />                                               
                            </Grid>
                            <Grid item className={classes.dropdown}>
                                <Button className={classes.rightNavButtons}>Pricing</Button>                                               
                            </Grid>
                            <Grid item className={classes.dropdown}>
                                <Dropdown name="Learn"/>                                               
                            </Grid>
                            <Grid item className={classes.dropdown} style={{marginRight:"2.5%"}}>
                                <Button className={classes.rightNavButtons}>Log In</Button>                                               
                            </Grid>
                            <Grid item>
                                <Button variant="contained" disableElevation className={classes.trial}>Start free trial</Button>                                               
                            </Grid>
                            
                        </Grid>
                            
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </div>
    )
}

export default NavBar
