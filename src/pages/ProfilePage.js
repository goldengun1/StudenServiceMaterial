import {
  Avatar,
  Button,
  Grid, IconButton,
  Paper,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import profileMainBackground from "../assets/images/profile_page_background.png";
import personalImage from "../assets/images/personal_image.jpg";
import mainBackground from "../assets/images/cubes_background.jpg";
import theme from "../components/ui/Theme";
import {PhotoCamera} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  profileMainBackground: {
    backgroundImage: `url(${mainBackground})`,
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    marginTop: "-0.5rem",
  },
  mainContainer: {
    // width: "20rem",
    backgroundColor: "#326771",
    backgroundImage: `url(${profileMainBackground})`,
    backgroundSize: "contain",
    backgroundRepeat: "repeat",
    padding: "25px 0px",
    marginTop: "1rem",
  },
  avatar: {
    width: "10rem",
    height: "10rem",
  },
  quotePaper: {
    backgroundColor: "#00000066",
    padding:" 10px 0",
    fontStyle:  "italic",
  },
  editButton: {
    width: "10rem",
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

const ProfilePage = (props) => {
  const classes = useStyles();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid
      container
      style={{ height: "60rem" }}
      className={classes.profileMainBackground}
      direction="column"
      alignItems="center"
    >
      <Grid item style={{ width: matchesXS ? "100%" : "30rem" }}>
        <Paper classes={{ root: classes.mainContainer }}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item style={{ marginBottom: "0rem" }}>
              <Avatar
                alt="profile picture"
                src={personalImage}
                className={classes.avatar}
              />
            </Grid>
            <Grid item style={{ marginBottom: "1rem" }}>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <IconButton color="secondary" aria-label="upload picture" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
            </Grid>
            <Grid item style={{ width: "100%" }}>
              <Grid container justify="space-around" alignItems="center">
                <Grid item>
                  <Typography variant="body1">First Name</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h4">Mihailo</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ width: "100%" }}>
              <Grid container justify="space-around" alignItems="center">
                <Grid item>
                  <Typography variant="body1">Last Name</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h4">Simic</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ width: "100%", marginTop: "1.5rem" }}>
              <Grid container justify="space-around" alignItems="center">
                <Grid item>
                  <Typography variant="body1">Email</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">simihailo@gmail.com</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ width: "100%" }}>
              <Grid container justify="space-around" alignItems="center">
                <Grid item>
                  <Typography variant="body1">Phone</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">(+381) 69 2211407</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ width: "100%", marginTop: "1.5rem" }}>
              <Grid container justify="space-around" alignItems="center">
                <Grid item>
                  <Typography variant="body1">Status</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">Bachelor Studies</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ width: "100%" }}>
              <Grid container justify="space-around" alignItems="center">
                <Grid item>
                  <Typography variant="body1">Last Change</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    {new Date(2022, 11, 2).toLocaleDateString()}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{marginTop: "2rem"}}>
              <Button className={classes.editButton}>Edit Profile</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item style={{ marginTop: "2rem", maxWidth: "25rem", width: matchesXS ? "80%": undefined}}>
        <Grid container direction="column">
          <Paper classes={{ root: classes.quotePaper }}>
            <Typography  align="left" variant="h4">
              "Some meaningfull quote that I have to share with the world..."
            </Typography>
            <Typography  align="right" variant="body1" style={{margin: "0.5rem 1rem 0 0"}}>
              -- Myself
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
