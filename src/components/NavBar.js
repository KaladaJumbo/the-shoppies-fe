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


const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: "#fbf7ed",
        paddingRight: "5% + 9px",
        paddingLeft: "calc(5% + 9px)",
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
        width: "12%"
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
                            <a href="https://www.shopify.com/" style={{display: "inline-block", float: "left", padding: "0"}}>
                                <img 
                                className={classes.logo} 
                                src={Logo}
                                alt="shopify logo link home"
                                href="shopify.com"/>
                            </a>                                               
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </div>
    )
}

export default NavBar
