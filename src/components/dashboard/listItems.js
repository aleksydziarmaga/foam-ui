import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import StarBorder from '@material-ui/icons/StarBorder';

const MainListItems = ({ handleFigureClick }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
    <ListItem button onClick={handleClick}>
        <ListItemIcon>
        <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Shapes" />
    </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button onClick={() => handleFigureClick('triangle')}>
            <ListItemText primary="Triangle" />
          </ListItem>
          <ListItem button  onClick={() => handleFigureClick('rectangle')}>
            <ListItemText primary="Rectangle"/>
          </ListItem>
          <ListItem button onClick={() => handleFigureClick('circle')}>
            <ListItemText primary="Circle" />
          </ListItem>
        </List>
      </Collapse>
      </List>
  );
}

// export const mainListItems = (
//   <div>
//     <ListItem button>
//       <ListItemIcon>
//         <DashboardIcon />
//       </ListItemIcon>
//       <ListItemText primary="Shapes" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <ShoppingCartIcon />
//       </ListItemIcon>
//       <ListItemText primary="Settings" />
//     </ListItem>
//   </div>
export default MainListItems;
