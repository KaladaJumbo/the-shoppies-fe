import React, { useState } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded'
import Menu from '@material-ui/core/Menu'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    button: {
        textTransform: 'none',
        fontSize: "115%",
        fontWeight: "500"
    }
  
}));



const Dropdown = props => {
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = useState(null)
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
      }
    
      const handleClose = () => {
        setAnchorEl(null)
      }

      
    return (
        <div>
            <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.button}
            >
                {props.name ? props.name : "default"}
            <ExpandMoreIcon/>
            </Button>
            <Menu
            id="simple-menu"
            getContentAnchorEl={null}
            anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
            }}
            transformOrigin={{
            vertical: "top",
            horizontal: "left"
            }}
            keepMounted
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                {props.list ?  props.list.forEach(item => {
                    <MenuItem onClick={handleClose}>item</MenuItem>
                }) : "pass array to the 'list' props"}
            </Menu>
        </div>
    )
}

export default Dropdown
