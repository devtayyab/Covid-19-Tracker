import React, { useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:"150px",
    borderBottom :"2px green"
    
  },
  style : {
  
    fontSize:"15px",
    textTransform:"uppercase",
    borderBottom :"2px green"
  },
  
}));

export default function Info() {
  const classes = useStyles();
  const [isdata,setdata]=useState([])
  const [load ,setload]=useState(false);
  
  useEffect(()=>{
    
  async  function getdata(){
    setload(true)
    const result= await fetch("https://api.thevirustracker.com/free-api?global=stats")
    let data = await result.json();
    
    delete data.results[0].source
    
        
        setdata(data.results[0])
        
        setload(false);
        
        
  }
  getdata()
  
  
  },[]);
  console.log(isdata)

  const loading="Data is loading---";
  if(load){
    return(
      <div>
    <h2> {loading}</h2>
    
    </div>
    )
  }
 


return (
  <div>
  <div className={classes.root}>
    <Grid container spacing={3}>
    {Object.keys(isdata).map((keys , ind)=>{
      return(
     
      <Grid item xs={12} sm={4} key={ind}>
        
        <Paper className={classes.paper} >
          <div className={classes.style}>

        <h2>{keys.replace(/_/g , " ")}</h2>
      <h3>{isdata[keys]}</h3>
      
     
    
      </div>
        
     
        </Paper>
      </Grid>
      
      );
      
})}
      </Grid>
      {/* <Line data={datta} classes={classes.mapp} /> */}
</div>
</div>
);
} 
      