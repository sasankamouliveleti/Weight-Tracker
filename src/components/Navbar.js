import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import ToggleOnOutlinedIcon from '@material-ui/icons/ToggleOnOutlined';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));


const Navbar = () =>{
    const classes = useStyles();
    const [toggleState , setToggleState] = useState(false);
    const toggle = ()=>{
        if(toggleState == true){
            document.body.style.backgroundColor = "pink";
            setToggleState(false);
        }else{
            document.body.style.backgroundColor = "white";
            setToggleState(true);
        }
    }
    return (
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Track Weight
          </Typography>
          <div onClick = {toggle} id='toggle'>
              {toggleState ? <ToggleOffIcon/> : <ToggleOnOutlinedIcon/>}
          </div>
        </Toolbar>
      </AppBar>
    )
}

export default Navbar;