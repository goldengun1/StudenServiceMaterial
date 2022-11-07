import { makeStyles } from "@material-ui/core/styles";
import {Button, Grid, TextField, Typography} from "@material-ui/core";
import background from "../assets/images/support_bacground.jpg";
import emailIcon from "../assets/icons/email.svg";
import phoneIcon from "../assets/icons/phone.svg";
import paperPlaneIcon from "../assets/icons/send.svg";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "45rem",
  },
  formContainer:{
    [theme.breakpoints.down('md')]: {
      marginBottom: "2rem",
      marginTop: "2rem",
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: "4rem",
      marginTop: "6rem",
    },
  },
  message:{
    border: `2px solid ${theme.palette.common.ming}`,
    marginTop: "4rem",
    borderRadius: "10px",
    marginBottom: "1rem",
  },
  sendButton: {
    width: "15rem",
    height: "2rem",
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
}));

const SupportPage = (props) => {
  const classes = useStyles();
  // const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  // const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  // const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="row" style={{ marginTop: "-0.5rem" }}>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        lg={4}
        xl={3}
      >
        {/* form */}
        <Grid item className={classes.formContainer}>
          <Grid container direction="column" >
            <Grid item>
              <Typography align="center" variant="h3">
                Contact Us
              </Typography>
              <Typography align="center" variant="body1">
                Help is on the way!
              </Typography>
            </Grid>
            {/* contact info */}
            <Grid item container style={{marginTop:"2rem"}} justify='center'>
              <Grid item>
                <img
                  alt="email icon"
                  src={emailIcon}
                  style={{ marginRight: "0.5rem", verticalAlign:"bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography variant="body1" >
                  <a href="mailto:simihailo+studnet@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>
                    simihailo@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{marginBottom:"1.5rem"}} justify='center'>
              <Grid item>
                <img
                  alt="email icon"
                  src={phoneIcon}
                  style={{ marginRight: "0.5rem", verticalAlign:"bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography variant="body1" >
                  <a href="tel:(+381) 69 2211407" style={{ textDecoration: "none", color: "inherit" }}>
                    (+381) 69 2211407
                  </a>
                </Typography>
              </Grid>
            </Grid>
            {/* text inputs */}
            <Grid item container direction='column'  spacing={2}>
              <Grid item>
                <TextField fullWidth id='firstname' label="First Name" placeholder='John'/>
              </Grid>
              <Grid item>
                <TextField fullWidth id='lastname' label="Last Name" placeholder='Doe'/>
              </Grid>
              <Grid item>
                <TextField fullWidth id='email' label="Contact Email" placeholder='example@example.com'/>
              </Grid>
            </Grid>
            {/* message */}
            <Grid item style={{ maxWidth: "20rem" }}>
              <TextField
                InputProps={{ disableUnderline: true }}
                className={classes.message}
                id="message"
                fullWidth
                multiline
                rows={7}
              />
            </Grid>
            <Grid item container justify='center'>
              <Button className={classes.sendButton}>
                Send Message
                <img alt="paper airplane icon" src={paperPlaneIcon} style={{ marginLeft: "0.5rem" }}/>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        lg={8}
        xl={9}
        className={classes.background}
      >
        {/* picture */}
      </Grid>
    </Grid>
  );
};

export default SupportPage;
