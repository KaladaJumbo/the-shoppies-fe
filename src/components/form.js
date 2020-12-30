import React, { useState } from 'react'
import { Button, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"


const useStyles = makeStyles((theme) => ({
    searchBox: {
        borderColor: 'red',

    },
    submitButton: {
        width: "100%", 
        height: "60%", 
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

    },
    focusedLabel: {

    },
  
}));
    
const Form = () => {
    const classes = useStyles();
    const [search, setSearch] = useState("")

    const handleOnChange = (input) => {
        setSearch(input)
        console.log(input)
        //then fetch
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        //fetch
        console.log("submit")
        console.log(search)
    }

    return (
        <form onSubmit={(e) => handleOnSubmit(e)}>
            <Grid container>
                <Grid item xs={12} lg={8} style={{marginRight: "5%"}}>
                    <TextField 
                    className={classes.searchBox}
                    id="outlined-search" 
                    label="Search and vote" 
                    type="search" 
                    variant="outlined" 
                    onChange={(e) => handleOnChange(e.target.value)}
                    fullWidth
                    placeholder="Movie Name"
                    helperText="This is a shopify project and not a real contest. Do not feel sad if your movie did not win."
                    />
                </Grid>
                <Grid item xs={12} lg={2}>
                    <Button 
                    variant="contained" 
                    type="submit"
                    disableElevation 
                    className={classes.submitButton}
                    inputlabelprops={{
                        classes:{
                            root: classes.buttonStyle,
                            focused: classes.buttonStyle
                        }
                    }}
                    inputprop={{
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
        </form>
    )
}

export default Form
