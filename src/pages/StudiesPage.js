import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core";
import Lottie from "react-lottie";
import topBlockImage from "../assets/images/orange_accent_background.png";
import midBlockImage from "../assets/images/profile_page_background.png";
import animationData from "../assets/animations/studying_animation.json";
import fallingBooksAnimation from "../assets/animations/books_fallinng.json";
import pencilWritingAnimation from "../assets/animations/pencil_writing.json";
import { Link } from "react-router-dom";
import theme from "../components/ui/Theme";

const useStyles = makeStyles((theme) => ({
  topBlock: {
    width: "100%",
    backgroundImage: `url(${topBlockImage})`,
    backgroundSize: "cover",
    marginTop: "-0.5rem",
    padding: "0 0 0 20px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "0.5rem",
    },
  },
  secondBlock: {
    backgroundColor: theme.palette.common.ming,
    width: "100%",
    // height: "40rem",
  },
  thirdBlock: {
    backgroundImage: `url(${midBlockImage})`,
    backgroundSize: "cover",
    width: "100%",
    minHeight: "30rem",
    padding: "0 0 0 20px"
  },
  topAnimation: {
    maxHeight: "30rem",
    maxWidth: "30rem",
    marginTop: "5rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "1rem",
    },
  },
  midAnimation: {
    maxWidth: "30rem",
    maxHeight: "30rem",
    marginTop: "5rem",
    [theme.breakpoints.down("xs")]:{
      marginTop: 0,
    },
  },
  btn: {
    width: "15rem",
    height: "1rem",
    backgroundColor: "wheat",
    borderRadius: "25px",
    fontFamily: "Aldrich",
    padding: "25px",
    border: `1px solid wheat`,
    marginTop: "1rem",
    "&:hover": {
      border: `1px solid ${theme.palette.common.cyan}`,
      color: "white",
    },
  },
}));

const StudiesPage = (props) => {
  const classes = useStyles();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const secondAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: fallingBooksAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const thirdAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: pencilWritingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Grid item container className={classes.topBlock} justify="space-between">
        <Grid item>
          {/*  left side text*/}
          <Grid
            container
            direction="column"
            style={{ height: "100%", padding: "0 15px" }}
            justify="center"
          >
            <Grid item style={{ marginBottom: "2rem" }}>
              <Typography variant="h3">
                Stay updated with your studies
              </Typography>
            </Grid>
            <Grid item>
              <Typography paragraph variant="body1">
                All of your signed up courses, and taken exams can be found
                here.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                It's all in one place so you can focus on studying, and don't
                worry about organization.
              </Typography>
              <Typography variant="body1">
                In the future you will be able to see if you have some new
                notifications or messages right here.
              </Typography>
            </Grid>
            <Grid item style={{ marginTop: "2rem" }}>
              <Typography variant="h4">Happy learning!</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.topAnimation}>
          {/*  right side animation*/}
          <Lottie options={defaultOptions} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.secondBlock}
        justify="space-between"
      >
        <Grid item className={classes.midAnimation}>
          {/* left side animation */}
          <Lottie options={secondAnimationOptions} />
        </Grid>
        <Grid item lg={6} style={{marginRight: "2rem"}}>
          {/* right side text */}
          <Grid
            container
            direction="column"
            justify="center"
            alignItems={matchesMD ? "center" : "flex-end"}
            style={{ height: "100%", padding: "0 15px" }}
          >
            <Grid item style={{ marginBottom: "2rem" }}>
              <Typography variant="h3">Courses</Typography>
            </Grid>
            <Grid item>
              <Typography paragraph align="center" variant="body1">
                Organization is the key to success.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                See all the courses that you are taking, and also sign up to new
                ones
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: matchesMD ? "1rem" : 0 }}>
              <Button className={classes.btn} component={Link} to="/courses">
                Explore Courses
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container className={classes.thirdBlock}>
        <Grid item>
          {/*  left side text*/}
          <Grid
            container
            direction="column"
            style={{ height: "100%", padding: "0 15px" }}
            justify="center"
          >
            <Grid item style={{ marginBottom: "2rem" }}>
              <Typography variant="h3">
                Overview your exams info
              </Typography>
            </Grid>
            <Grid item>
              <Typography paragraph variant="body1">
                Get a detailed look of all your taken exams.
                Grades, score, dates and more...
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Information about exams can be somethimes hard to track.
              </Typography>
              <Typography variant="body1">
                This way it is easy to check up on results, scheduled exam dates, and also see your success rate!
              </Typography>
            </Grid>
            <Grid item style={{ marginTop: "2rem" }}>
              <Typography variant="h4">Check it out</Typography>
            </Grid>
            <Grid item>
              <Button className={classes.btn} component={Link} to="/exams">
                Explore Exams
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.topAnimation}>
          {/*  right side animation*/}
          <Lottie options={thirdAnimationOptions} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StudiesPage;
