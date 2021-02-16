import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import firebase from '../config/firebase-config';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  main: {
    paddingLeft: "350px",
    paddingTop: "50px",
    paddingBottom: "50px",
  },
}));

export default function Inputdata() {
  const classes = useStyles();
  const [enteredweight,setWeight] = useState({});
  const plot = () => {
    let date1 =new Date(document.getElementById("date").value).toString().split(" ");
    let date = date1[0]+' '+date1[1]+' '+date1[2];
    let weight = document.getElementById("weight").value;
    console.log(date,weight);
    if(date!="" && weight!=""){
        setWeight({date:weight});
        firebase.database().ref('weights').push({
            date : date,
            weight : weight
          });
    }
  };
  return (
    <div>
    <div className={classes.main}>
      <Grid >
        <form className={classes.container} noValidate>
          <Grid item xs={3}>
            <TextField
              id="date"
              label="Date"
              type="date"
              defaultValue="2021-02-16"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="weight"
              label="Enter Weight"
              variant="outlined"
              type="number"
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={plot}
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </div>
    <div>
        
        </div></div>
  );
}
