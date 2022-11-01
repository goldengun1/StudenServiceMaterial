import { Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import footerImg from "../../assets/images/footer_picture.jpg";
import globe from "../../assets/icons/globe.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    position: "relative",
    background: `linear-gradient(to right,rgba(0,6,36) 20%,rgba(0,6,36) 30%, ${theme.palette.common.ming} 100%) `,
    [theme.breakpoints.down("md")]: {
      background: `linear-gradient(to right,rgba(0,6,36) 20%,rgba(0,6,36) 40%, ${theme.palette.common.ming} 100%) `,
    },
    alignContent: 'center'
  },
  mainContainer: {
    position: "absolute",
    display: "flex",
    // height: "100%",
    marginTop: "4rem",
  },
  gridItem: {
    margin: "3rem",
  },
  footerImg: {
    height: "20rem",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      height: "15rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "10rem",
    },
  },
  link: {
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: "0.75em",
    fontWeight: "bold",
    fontFamily: "Aldrich",
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6rem",
    right: "3rem",
    width: 'auto'
  },
  icon: {
    height: "4rem",
    width: "4rem",
    [theme.breakpoints.down('md')] : {
      marginTop: "-4rem",
    },
    [theme.breakpoints.down('xs')] : {
      height: "3rem",
      width: "3rem",
      marginTop: "-4rem",
    }
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  const {setTabsValue, setSelectedIndex } = props;

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column">
              <Grid
                item
                component={Link}
                className={classes.link}
                to="/"
                onClick={() => {
                  setTabsValue(0);
                }}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={3} direction="column">
              <Grid
                item
                component={Link}
                className={classes.link}
                to="/studies"
                onClick={() => {
                  setTabsValue(1);
                  setSelectedIndex(0);
                }}
              >
                Studies
              </Grid>
              <Grid
                item
                component={Link}
                className={classes.link}
                to="/exams"
                onClick={() => {
                  setTabsValue(1);
                  setSelectedIndex(1);
                }}
              >
                Exams
              </Grid>
              <Grid
                item
                component={Link}
                className={classes.link}
                to="/courses"
                onClick={() => {
                  setTabsValue(1);
                  setSelectedIndex(2);
                }}
              >
                Courses
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column">
              <Grid
                item
                component={Link}
                className={classes.link}
                to="/profile"
                onClick={() => {
                  setTabsValue(2);
                }}
              >
                Profile
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column">
              <Grid
                item
                component={Link}
                className={classes.link}
                to="/support"
                onClick={() => {
                  setTabsValue(3);
                }}
              >
                Support
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column">
              <Grid
                item
                component={"a"}
                className={classes.link}
                href="http://github.com/goldengun1/Student_Service"
                rel="noopener noreferrer"
                target="blank"
              >
                Development & More
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt="footer decoration"
        src={footerImg}
        className={classes.footerImg}
      />
      <Grid container justify='flex-end' spacing={3} className={classes.socialContainer}>
        <Grid
          item
          component={"a"}
          href="http://www.matf.bg.ac.rs/"
          rel="noopener noreferrer"
          target="blank"
        >
          <img alt="web logo" src={globe} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com/matematicki.fakultet"
          rel="noopener noreferrer"
          target="blank"
        >
          <img alt="facebook logo" src={facebook} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://instagram.com/matfinformatika"
          rel="noopener noreferrer"
          target="blank"
        >
          <img alt="instagram" src={instagram} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
