import React, {useContext, useEffect, useState} from "react";
import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Fragment } from "react";
import logo from "../../assets/images/logo-white.png";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth-context";

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1,
    height: "8rem",
    [theme.breakpoints.down("md")]: {
      height: "6rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "4rem",
    },
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "4.5rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0",
    },
  },
  logo: {
    height: "3rem",
    marginTop: "2rem",
    [theme.breakpoints.down("md")]: {
      height: "2.5rem",
      marginTop: "0.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "2rem",
      marginTop: "0",
    },
  },
  logoButton: {
    padding: 0,
    "&:hover": {
      background: "transparent",
    },
    marginLeft: "1rem",
  },
  tabContainer: {
    marginLeft: "auto",
    marginTop: "auto",
  },
  tab: {
    ...theme.typography.tab,
    color: "white",
    // minWidth: "200px",
    marginLeft: "25px",
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: 0,
    width: "12rem",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: "0.7",
    "&:hover": {
      opacity: 1,
    },
    getContentAnchorEl: null,
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
    minWidth: "20rem",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: "0.7",
    fontFamily: "Aldrich",
    "&:hover": {
      opacity: 1,
      backgroundColor: "rgba(170,255,255,0.34)",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  drawerItemSelected: {
    opacity: 1,
    backgroundColor: theme.palette.secondary.main,
  },
  drawerIconContainer: {
    marginLeft: "auto",
    marginTop: "10px",
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  logoutBtn:{
    width: "10rem",
    height: "1rem",
    backgroundColor: "wheat",
    borderRadius: "25px",
    fontFamily: "Aldrich",
    padding: "25px",
    border: `1px solid wheat`,

    margin: "2rem 1.5rem 0 1rem",
    "&:hover": {
      border: `1px solid ${theme.palette.common.cyan}`,
      color: "white",
    },
  },
}));

const Header = (props) => {
  //STATES
  const authCtx = useContext(AuthContext);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const { tabsValue, setTabsValue, selectedIndex, setSelectedIndex } = props;
  const iOS = window && /iPad|iPhone|iPod/.test(navigator.userAgent);

  //HANDLERS
  const openMenuHandler = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuIsOpen(true);
  };

  const closeMenuHandler = (event) => {
    setAnchorEl(null);
    setMenuIsOpen(false);
  };

  const changeNavTabsHandler = (event, value) => {
    setTabsValue(value);
  };

  const menuItemClickHandler = (event, index) => {
    setAnchorEl(null);
    setMenuIsOpen(false);
    setSelectedIndex(index);
    setTabsValue(1);
  };

  const logoutHandler = (event) => {
    event.preventDefault();
    authCtx.logout();

  };

  //ARRAY_VARS
  const menuOptions = [
    { name: "Studies", route: "/studies" },
    { name: "Exams", route: "/exams" },
    { name: "Courses", route: "/courses" },
  ];

  useEffect(() => {
    const path = window.location.pathname;
    switch (path) {
      case "/":
        setTabsValue(0);
        break;
      case "/studies":
        setTabsValue(1);
        setSelectedIndex(0);
        break;
      case "/profile":
        setTabsValue(2);
        break;
      case "/support":
        setTabsValue(3);
        break;
      case "/exams":
        setTabsValue(1);
        setSelectedIndex(1);
        break;
      case "/courses":
        setTabsValue(1);
        setSelectedIndex(2);
        break;
      default:
        console.log(`ERROR PATH: ${path}`);
        break;
    }
  }, [setSelectedIndex, setTabsValue]);

  //JSX_ELEMENTS
  const drawer = (
    <Fragment>
      <SwipeableDrawer
        onClose={() => {
          setDrawerIsOpen(false);
        }}
        onOpen={() => {
          setDrawerIsOpen(true);
        }}
        open={drawerIsOpen}
        classes={{ paper: classes.drawer }}
        disableBackdropTransition={!iOS} disableDiscovery={iOS}
      >
        <div className={classes.toolbarMargin} />
        <List>
          <ListItem
            button
            divider
            className={
              tabsValue === 0
                ? [classes.drawerItem, classes.drawerItemSelected]
                : classes.drawerItem
            }
            onClick={() => {
              setDrawerIsOpen(false);
              setTabsValue(0);
            }}
            component={Link}
            to="/"
          >
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem
            button
            divider
            className={
              tabsValue === 1
                ? [classes.drawerItem, classes.drawerItemSelected]
                : classes.drawerItem
            }
            onClick={() => {
              setDrawerIsOpen(false);
              setTabsValue(1);
              setSelectedIndex(0);
            }}
            component={Link}
            to="/studies"
          >
            <ListItemText>Studies</ListItemText>
          </ListItem>
          <ListItem
            button
            divider
            className={
              tabsValue === 2
                ? [classes.drawerItem, classes.drawerItemSelected]
                : classes.drawerItem
            }
            onClick={() => {
              setDrawerIsOpen(false);
              setTabsValue(2);
            }}
            component={Link}
            to="/profile"
          >
            <ListItemText>Profile</ListItemText>
          </ListItem>
          <ListItem
            button
            divider
            className={
              tabsValue === 3
                ? [classes.drawerItem, classes.drawerItemSelected]
                : classes.drawerItem
            }
            onClick={() => {
              setDrawerIsOpen(false);
              setTabsValue(3);
            }}
            component={Link}
            to="/support"
          >
            <ListItemText>Support</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setDrawerIsOpen((prev) => !prev)}
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );

  const tabs = (
    <Fragment>
      <Tabs
        value={tabsValue}
        onChange={changeNavTabsHandler}
        className={classes.tabContainer}
      >
        <Tab className={classes.tab} component={Link} to="/" label="Home" />
        <Tab
          aria-owns={anchorEl ? "studies-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          onMouseOver={openMenuHandler}
          className={classes.tab}
          component={Link}
          to="/studies"
          label="Studies"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/profile"
          label="Profile"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/support"
          label="Support"
        />
      </Tabs>
      {/*TODO: maybe some button for some action*/}
      <Button className={classes.logoutBtn} onClick={logoutHandler}>Log Out</Button>
      <Menu
        id="studies-menu"
        open={menuIsOpen}
        onClose={closeMenuHandler}
        anchorEl={anchorEl}
        elevation={0}
        keepMounted
        MenuListProps={{ onMouseLeave: closeMenuHandler }}
        getContentAnchorEl={null}
        classes={{ paper: classes.menu }}
        style={{ zIndex: 1500 }}
      >
        {menuOptions.map((menuItem, index) => (
          <MenuItem
            key={index}
            component={Link}
            to={menuItem.route}
            className={classes.menuItem}
            onClick={(event) => {
              menuItemClickHandler(event, index);
            }}
            selected={index === selectedIndex && tabsValue === 1}
          >
            {menuItem.name}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link}
              to="/"
              className={classes.logoButton}
              onClick={() => {
                setTabsValue(0);
              }}
            >
              <img src={logo} alt="site logo" className={classes.logo} />
            </Button>
            {matchesMD ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Header;
