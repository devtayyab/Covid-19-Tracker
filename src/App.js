import React from 'react';
import './App.css';
import Header from './component/header';
import Info from './component/info';
import { makeStyles } from '@material-ui/core/styles';
import Country from './component/component';
const useStyles = makeStyles((theme) => ({
  App: {
    maxWidth: "100px"
  }
}))


function App() {
  return (
    <div className="App">
    <Header />
    <Info />
    <Country />
</div>
  );
}

export default App;
