import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton, Tab, Tabs, SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import routes from "../../routes.js";
import { useRouter } from 'next/router'
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  menuButton: {

    marginRight: theme.spacing(2),
    display: 'none',
    [theme.breakpoints.down("sm")]: {
      display: 'block'
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: 20,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
  hiddenMenu: {
    [theme.breakpoints.down("sm")]: {
      display: 'none'
    },
  },
  list: {
    width: 'auto',
    height: 'auto',
    minWidth: '250px'
  },
  flexGrow: {
    flexGrow: 1,
  }

}));

function ScrollTop(props) {
  const { children, window } = props;

  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop(props) {
  const classes = useStyles();
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  function getIndexRoute() {
    const index = routes.findIndex(item => item.path === router.pathname)
    return index > 0 ? index : 0
  }
  const [value, setValue] = React.useState(getIndexRoute());
  const handleChange = (event, newValue) => {
    router.push(routes[newValue].path)
    setValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setShowMenu(open)
  };
  return (
    <React.Fragment>
      <SwipeableDrawer
        anchor='left'
        open={showMenu}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div
          className={`${classes.list}`}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {routes.map((route, index) => (
              <Link key={index} href={route.path}>
                <ListItem button>
                  <ListItemIcon >{route.icon}</ListItemIcon>
                  <ListItemText primary={route.name} />
                </ListItem>
              </Link>

            ))}
          </List>
        </div>
      </SwipeableDrawer>
      <AppBar color="primary">
        <Toolbar variant="dense" >
          <>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={() => setShowMenu(true)}
            >
              <MenuIcon />
            </IconButton>
            <Link  href='/'>
              <Typography component='a' variant="h6" noWrap>
                THƯƠNG QUÁN
              </Typography>
            </Link>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor='secondary'
              aria-label="simple tabs"
              className={`${classes.hiddenMenu} ${classes.flexGrow}`}
            >
              {
                routes.map((route, index) =>
                  <Tab key={index} label={route.name} {...a11yProps(index)} />)
              }
            </Tabs>
          </>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Tìm kiếm bài viết ....."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Button variant="outlined"  color="inherit">Booking</Button>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
