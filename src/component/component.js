import React, { useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:"auto",
    width:"auto"
    
  },
  style : {
  
    fontSize:"15px",
    textTransform:"uppercase",
  },
  margin: {
    margin: theme.spacing(2),
    maxWidth:"100%",
  
    textTransform:"capitalize",
    
    fontSize:"30px",
  },
}));

export default function Country() {
  const classes = useStyles();
  const [isdata,setdata]=useState([])
  const [load ,setload]=useState(false);
  const [iscountry, setcountry] = useState("");
 
  
  useEffect(()=>{
    
  async  function getdata(){
    setload(true)
    const result= await fetch('https://corona.lmao.ninja/v2/countries')
    let data = await result.json();
    
    
        
        setdata(data)
  }
  getdata()
  
  
  
  },[]);

 
  const  filtercountry = isdata.filter(item => {
    return iscountry === "" ?  item  : item.country.includes(iscountry)
   })
  
  const countree = filtercountry.map((daata,i) =>{
  
     

  return (
    <>
    {/* <h1>Country Wise Data</h1> */}
  <div className={classes.root} key={i}>
    
    <Grid container spacing={2} className={classes.grid}>



   
     
      <Grid item xs={12} sm={12} >
        
        <Paper className={classes.paper} >
          <div className={classes.style}>
      <img src={daata.countryInfo.flag}/>
      <h2>{daata.country}</h2>
       <h2>total casess {daata.cases}</h2>
      <h2>total deaths {daata.deaths}</h2>
      <h2>total recovered {daata.recovered}</h2>
      <h2>Total Active {daata.active}</h2>
     
      </div>
        
     
        </Paper>
      </Grid>
    
      
      </Grid>
    
  </div>
  </>
);

})

return(
  <div> 
    <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Country</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            placeholder="Search a country   (put first letter in upper case)"
            onChange={e => setcountry(e.target.value)}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
  <h2>{countree}</h2>
  </div>
 
  
)
    }


