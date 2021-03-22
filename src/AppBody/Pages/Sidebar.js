import React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Settings from "./SidebarContents/Settings";
import Overview from "./SidebarContents/Overview";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ChartPage from "./SidebarContents/ChartDetails/ChartPage";
import PricingPage from "./SidebarContents/PricingDetails/PricingPage";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },

  list: {
    backgroundColor: "#4f00ce",
    height: "100vh",
    margin: "0",
    padding: "0",
    display: "grid",
    placeItems: "center",
  },

  sidebar_button_Text: {
    backgroundColor: "white",
    width: "70%",
    height: "50px",
    color: "black",
  },
  sidebar_button_Text_child1: {
    backgroundColor: "white",
    height: "50px",
    width: "70%",
    color: "black",
  },

  linktext: {
    textDecoration: "none",
  },
}));

function Sidebar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //Drawer Sidebar..................
  const drawer = (
    <div>
      <div className={classes.toolbar} />

      <List className={classes.list}>
        <Button
          className={classes.sidebar_button_Text}
          variant="contained"
          href="#settings"
        >
          Settings
        </Button>
        <Button
          className={classes.sidebar_button_Text_child1}
          variant="contained"
          href="#overview"
        >
          Overview
        </Button>
        <Button
          className={classes.sidebar_button_Text}
          variant="contained"
          href="#chartpage"
        >
          Graphs
        </Button>
        <Button
          className={classes.sidebar_button_Text}
          variant="contained"
          href="#products"
        >
          Products
        </Button>
        <Button
          className={classes.sidebar_button_Text}
          variant="contained"
          href="#pricing"
        >
          Pricing
        </Button>
        <Divider />
        <Link to="/profile" className={classes.linktext}>
          <Button
            variant="contained"
            color="secondary"
            href="#pricing"
            startIcon={<ExitToAppIcon />}
          >
            Exit
          </Button>
        </Link>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <AnimatePresence exitBeforeEnter>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Settings />
          <Overview />
          <ChartPage />
          <PricingPage />
        </main>
      </AnimatePresence>
    </div>
  );
}

export default Sidebar;
