import {
  Button, CircularProgress,
  Grid,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import background from "../assets/images/AI_Network_Background.jpg";
import React, {Fragment, useContext, useRef, useState} from "react";
import logo from "../assets/images/logo-white.png";
import theme from "../components/ui/Theme";
import AuthContext from "../context/auth-context";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    width: "100%",
    minHeight: "55rem",
    zIndex: "-10",
    marginTop: "-7px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "-1.5rem",
      minHeight: "38rem",
    },
  },
  logo: {
    marginTop: "3rem",
    marginLeft: "2rem",
    maxWidth: "20rem",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
    },
  },
  slika: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: 0,
      textAlign: "center",
    },
  },
  form: {
    backgroundColor: "#00000044",
    maxWidth: "30rem",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10rem",
    borderRadius: "5px",
    // border: `1px solid ${theme.palette.common.cyan}`,
  },
  submit: {
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

const LoginPage = (props) => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const [login, setLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const onSubmitFormHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const UserName = usernameRef.current.value;
    const EmailAddress = emailRef.current.value;
    const Password = passwordRef.current.value;

    let url;
    if (login) {
      url = "https://localhost:7225/api/accounts/login";
    } else {
      url = "https://localhost:7225/api/accounts/create";
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserName,
        EmailAddress,
        Password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            let errorMessage = "Auth Failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((responseData) => {
        console.log(responseData);
        authContext.login(responseData.token,responseData.expiration,UserName);
        history.replace('/');
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <Fragment>
      <div className={classes.backdrop}>
        {!matchesXS && (
          <div className={classes.slika}>
            <img alt="site logo" src={logo} className={classes.logo} />
          </div>
        )}
        <Paper classes={{ root: classes.form }}>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            style={{ paddingTop: "50px", padding: "30px 50px 15px 50px" }}
          >
            <Grid item>
              <Typography align="center" variant="h4">
                {login ? "Log In" : "Sign Up"}
              </Typography>
            </Grid>
            <Grid item container direction="column" spacing={1}>
              <Grid item>
                <TextField
                  id="username"
                  label="Username"
                  fullWidth
                  inputProps={{ ref: usernameRef }}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  fullWidth
                  inputProps={{ ref: emailRef }}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                  inputProps={{ ref: passwordRef }}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              justify="center"
              style={{ marginTop: "1.5rem" }}
            >
              {isLoading ? <CircularProgress color='secondary'/> : <Button
                className={classes.submit}
                type="submit"
                onClick={onSubmitFormHandler}
              >
                {login ? "Log In" : "Sign Up"}
              </Button>}
            </Grid>
            <Grid
              item
              justify="space-between"
              container
              direction="row"
              style={{ marginTop: "2rem" }}
            >
              <Typography variant="body2">
                {login ? "Don't have an account?" : "Alredy have an account?"}
              </Typography>
              <Button
                disableRipple
                disableFocusRipple
                style={{ color: "white", lineHeight: 0 }}
                onClick={(event) => {
                  setLogin((prev) => !prev);
                }}
              >
                {login ? "Register" : "Log In"}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Fragment>
  );
};

export default LoginPage;
