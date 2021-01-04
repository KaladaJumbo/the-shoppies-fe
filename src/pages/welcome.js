import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import stock from "../images/stock.jpg"
import { Button, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Form from '../components/form';



const useStyles = makeStyles((theme) => ({
    root: {
    },
    topsection: {
        backgroundColor: "#fbf7ed",
        height: "66.7vh",
        width: "100%",
        paddingTop: "0",
        overflow: "hidden",

    },
    right:{
        //top section grid right
        overflow: "hidden",
        padding: "0",
        margin: "0",
    },
    left: {
        //top section grid left
        padding: "5% 5%", 

    },
    leftText:{
        padding: "0",
        color: "#004c3f", 
        fontSize: "3.4em",
        fontWeight: "900"
    },
    secondSection: {
        backgroundColor: "#004c3f",
        minHeight: "65vh",
        minWidth: "100%",
        overflowTop: "hidden"
    },
    focusedLabel: {

    },
    
}));
    
const Welcome = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.topsection}>
                <Grid container style={{padding: "0", margin: "0", overflow: "hidden", height: "100%"}}>
                    <Grid container item className={classes.left} xs={12} lg={6}>
                        <Grid item xs={12} lg={12}>
                            <Typography className={classes.leftText}>
                                Anyone, anywhere, can vote for the top 5 movies
                            </Typography>
                        </Grid>
                        <Grid  container item xs={12}>
                            <Form />
                        </Grid>
                    </Grid>
                    <Grid item className={classes.right} xs={12} lg={6} style={{padding: "0", margin: "0"}}>
                        <img src={stock} alt="two women voting" style={{maxHeight: "100%", maxWidth: "100%", width: "100%", height: "100%"}}/>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.secondSection}>
            
            </div>
        </div>
    )
}

export default Welcome
