import React from 'react'
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    topsection: {
        backgroundColor: "#fbf7ed",
        height: "65vh",
        width: "100%",
    },
    secondSection: {
        backgroundColor: "#004c3f",
        height: "65vh",
        width: "100%",
    }
  
}));
    
const Welcome = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.topsection}>

            </div>
            <div className={classes.secondSection}>

            </div>
        </div>
    )
}

export default Welcome
