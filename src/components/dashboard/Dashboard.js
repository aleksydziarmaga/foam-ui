import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MainListItems from './listItems';
import Deposits from './Deposits';
import Orders from './Orders';
import Stage from '../stage/stage';

import foamBackground from "./foamBackground.png"
import screwImg from '../../images/srubo.png';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [circles, setCircles] = React.useState([]);
  const [rectangles, setRectangles] = React.useState([]);
  const [triangles, setTriangles] = React.useState([]);
  const [screwdrivers, setScrewdrivers] = React.useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const getRandomInt = max => {
    return Math.floor((Math.random() * Math.floor(max)) + 500);
  };

  const addCircle = () => {
    const circ = {
      x: getRandomInt(100),
      y: getRandomInt(100),
      width: 100,
      height: 100,
      fill: "#ed1b24",
      id: `circ${circles.length + 1}`,
      shadowColor: 'black',
      shadowBlur: 0,
      shadowOffset: { x: 10, y: 10 },
      shadowOpacity: 0.5
    };
    const circs = circles.concat([circ]);
    setCircles(circs)
  };

  const addRectangle = () => {
    const rec = {
      x: getRandomInt(100),
      y: getRandomInt(100),
      width: 100,
      height: 100,
      fill: "#ed1b24",
      id: `rec${rectangles.length + 1}`,
      shadowColor: 'black',
      shadowBlur: 0,
      shadowOffset: { x: 10, y: 10 },
      shadowOpacity: 0.5
    };
    const recs = rectangles.concat([rec]);
    setRectangles(recs)
  };

  const addTriangle = () => {
    const tri = {
      x: getRandomInt(100),
      y: getRandomInt(100),
      fill: "#ed1b24",
      id: `tri${rectangles.length + 1}`,
      shadowColor: 'black',
      shadowBlur: 0,
      shadowOffset: { x: 10, y: 10 },
      shadowOpacity: 0.5
    };
    const tris = rectangles.concat([tri]);
    setTriangles(tris)
  }

  const addScrewdriver= () => {
    const screw = {
      x: getRandomInt(100),
      y: getRandomInt(100),
      width: 200,
      height: 200,
      image: screwImg,
      id: `screw${screwdrivers.length + 1}`,
      shadowColor: 'black',
      shadowBlur: 0,
      shadowOffset: { x: 10, y: 10 },
      shadowOpacity: 0.5
    };
    const screws = screwdrivers.concat([screw]);
    setScrewdrivers(screws);
  }

  const handleOnClick = (f) => {
    switch(f) {
      case 'circle': {
        return addCircle();
      }
      case 'rectangle': {
        return addRectangle();
      }
      case 'triangle': {
        return addTriangle();
      }
      case 'screwdriver': {
        return addScrewdriver();
      }
      default: {
        return () => {};
      }
    }
  }

  return (
    <div className={classes.root} style={ { backgroundImage: `url(${foamBackground})`, backgroundRepeat: true }}>
      <CssBaseline />
      <AppBar color="white" position="absolute" className={clsx(classes.appBar, true)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            <img src="https://facom.com.pl/img/facomcompl-logo-15317536601.jpg" />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider/>
        <MainListItems handleFigureClick={handleOnClick}/>
      </Drawer>
        
      <Stage circles={circles} rectangles={rectangles} triangles={triangles} screwdrivers={screwdrivers}/>
        
      
    </div>
  );
}
