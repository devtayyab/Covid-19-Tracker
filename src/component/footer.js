import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { TextareaAutosize } from '@material-ui/core';
import Component from './component'

const useStyles = makeStyles({
  root: {
    width: 500,
  },
  cente: {
    position:'fixed',
    bottom:0,
    right:0,
    left:0,
    // width: "auto",
    
  }
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.cente}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />}  />
      <BottomNavigationAction label="Countries" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />}/>
    </BottomNavigation>
  );
}
