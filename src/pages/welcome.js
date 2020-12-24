import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import stock from "../images/stock.jpg"
import { Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
    },
    topsection: {
        backgroundColor: "#fbf7ed",
        height: "66.7vh",
        width: "100%",
        paddingTop: ".6%"
    },
    right:{
        //top section grid right
        overflow: "hidden",
    },
    left: {
        //top section grid left
        padding: "5% 5%", 

    },
    leftText:{
        padding: "0",
        color: "#004c3f", 
        fontSize: "3.125em",
        fontWeight: "800"
    },
    secondSection: {
        backgroundColor: "#004c3f",
        height: "65vh",
        width: "100%",
    },

  
}));
    
const Welcome = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.topsection}>
                <Grid container xs={12} style={{padding: "0", overflow: "hidden"}}>
                    <Grid item className={classes.left} xs={12} lg={6}>
                        <Typography className={classes.leftText}>
                            Vote with us to find out the top 5 best quarintine movies
                        </Typography>
                    </Grid>
                    <Grid item className={classes.right} xs={12} lg={6}>
                        <img src={stock} alt="image of two women voting" style={{maxHeight: "100%", maxWidth: "100%"}}/>
                    </Grid>
                </Grid>

            </div>
            <div className={classes.secondSection}>

            </div>
        </div>
    )
}

export default Welcome
