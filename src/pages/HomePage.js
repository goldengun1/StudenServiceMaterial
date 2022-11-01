import { makeStyles } from "@material-ui/core/styles";
import {Button, Grid, Typography, useMediaQuery} from "@material-ui/core";
import background from "../assets/images/lecture-background.jpg";
import theme from "../components/ui/Theme";
import classesAnim from "../assets/animations/SelfTypingAnimation.module.css";
import animationData from "../assets/animations/customer_support.json";
import Lottie from "react-lottie";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "42rem",
    borderRadius: "1000px",
    [theme.breakpoints.down("md")]:{
      marginTop: "2rem"
    },
  },
  goToProfileButton:{
    width: "10rem",
    height: "1rem",
    backgroundColor: "wheat",
    borderRadius: "25px",
    fontFamily: "Aldrich",
    padding: "25px",
    border: `1px solid wheat`,
    "&:hover": {
      border: `1px solid ${theme.palette.common.cyan}`,
      color: "white",
    },
  },
  animation: {
    maxHeight: "30rem",
    maxWidth: "30rem",
    marginLeft: "10rem",
    marginTop: "5rem",
    [theme.breakpoints.down("md")]:{
      maxHeight: "15rem",
      maxWidth: "15rem",
    },
  },
}));

const HomePage = (props) => {
  const classes = useStyles();
  const colors = theme.palette.common;
  const SelfWritingText = "This is where the studying starts..."
  const matchesMD = useMediaQuery(theme.breakpoints.only('md'));
  const matchesXS = useMediaQuery(theme.breakpoints.only('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Grid container direction="column" style={{ marginTop: "6rem" }} spacing={matchesMD ? 3 : 0}>
      <Grid item container direction="row">
        <Grid item container justify='center' direction="column"  lg={5} xl={4}>
          <Grid item>
            <Grid container spacing={matchesMD ? 3 : 0} direction="column">
              <Grid item>
                <Typography align="center" variant="h3" style={{marginBottom: "2rem"}}>
                  Hello!{" "} <span role="img" aria-label="waving hand">
                    👋🏻
                  </span>
                </Typography>
                <Typography
                  align="center"
                  variant="body1"
                  paragraph
                >
                  We would like to welcom You to the newest and most advanced version of our <span style={{color: colors.cyan}}>StudentService</span>!
                </Typography>
                <Typography align='center' variant='body1' paragraph>
                  StudentService was a project made by students back in 2018 as a course project.
                  Now it has more than 15 people working and maintaining the project, in which are some professors who
                  have over 15 years experience in the industry.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  <p className={`${classesAnim.line1} ${classesAnim.animtypewriter}`}>{SelfWritingText}</p>
                </Typography>
              </Grid>
              <Grid item>
                <Grid item container direction={matchesXS ? 'column' : 'row'} justify='space-around'>
                  <Grid item>
                    <Typography variant='h4' align={matchesXS ? 'center' : undefined}>
                      See Your side
                    </Typography>
                    <Typography variant='body1' align={matchesXS ? 'center' : undefined}>
                      Take a look at your personal page
                    </Typography>
                  </Grid>
                  <Grid item align="center">
                    <Button className={classes.goToProfileButton}>Go</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container className={classes.background} lg={7} xl={8}>
          {/*  image with welcome text*/}
          <Grid
            item
            container
            alignItems="center"
            justify="center"
            style={{
              backgroundColor: "#00000055",
              width: "100%",
              borderRadius: "1000px",
            }}
          >
            <Typography variant="h3">Welcome!</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="row" justify='flex-start'>
        <Grid item>
          <Typography variant='h4' align={matchesXS ? 'center' : undefined}>
            We support You!
          </Typography>
          <Typography variant='body1' align={matchesXS ? 'center' : undefined}>
            If u encounter a bug or a technical difficulty, please contact our team.
          </Typography>
        </Grid>
        <Grid item className={classes.animation}>
          <Lottie options={defaultOptions}/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
