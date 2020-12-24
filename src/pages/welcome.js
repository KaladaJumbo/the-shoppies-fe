import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import stock from "../images/stock.jpg"
import { Button, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
    root: {
    },
    topsection: {
        backgroundColor: "#fbf7ed",
        height: "66.7vh",
        width: "100%",
        paddingTop: "0"
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
        fontSize: "3.125em",
        fontWeight: "800"
    },
    secondSection: {
        backgroundColor: "#004c3f",
        height: "65vh",
        width: "100%",
    },
    searchBox: {
        borderColor: 'red',

    },
    submitButton: {
        width: "100%", 
        height: "40%", 
        backgroundColor: "#008060",
        color: "white",
        "&:hover": {
            backgroundColor: "#004c3f",
        },
    },
    buttonStyle: {
        color: "#004c3f",
        borderColor: "#004c3f",
        "&$focusedLabel": {
            color: "#004c3f"
          },

    }
  
}));
    
const Welcome = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.topsection}>
                <Grid container xs={12} style={{padding: "0", margin: "0", overflow: "hidden", height: "100%"}}>
                    <Grid container item className={classes.left} xs={12} lg={6}>
                        <Typography className={classes.leftText}>
                            Vote with us to find out the top 5 best quarintine movies
                        </Typography>
                        <br/>
                        <Grid item xs={12} lg={8} style={{marginRight: "5%"}}>
                            <TextField 
                        className={classes.searchBox}
                        id="outlined-search" 
                        label="Search and vote" 
                        type="search" 
                        variant="outlined" 
                        fullWidth
                        placeholder="Movie Name"
                        helperText="This is a shopify project and not a real contest. Do not feel sad if your movie did not win."
                        />
                        </Grid>
                        <Grid item xs={12} lg={2}>
                            <Button 
                            variant="contained" 
                            disableElevation 
                            className={classes.submitButton}
                            inputLabelProps={{
                                classes:{
                                    root: classes.buttonStyle,
                                    focused: classes.buttonStyle
                                }
                            }}
                            inputProp={{
                                className: {
                                    root: classes.buttonStyle,
                                    focused: classes.buttonStyle
                                }
                            }}
                            >
                                search
                            </Button>
                        </Grid>
                        
                    </Grid>
                    <Grid item className={classes.right} xs={12} lg={6} style={{padding: "0", margin: "0"}}>
                        <img src={stock} alt="image of two women voting" style={{maxHeight: "100%", maxWidth: "100%", width: "100%", height: "100%"}}/>
                    </Grid>
                </Grid>

            </div>
            <div className={classes.secondSection}>

            </div>
        </div>
    )
}

export default Welcome
