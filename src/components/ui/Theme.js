import {createMuiTheme} from "@material-ui/core/styles";

const green = "#9fce4b";
const phlox = "#e600ff";
const ming = "#326771";
const background = "#1a2d31"
const cyan = "#42D9C8";
const black = "#000000";
const grey = "#5D5D5D";

export default createMuiTheme({
  palette:{
    common:{
      green: green,
      black: black,
      grey: grey,
      phlox: phlox,
      ming: ming,
      cyan: cyan,
    },
    primary:{
      main: ming,
    },
    secondary:{
      main: cyan,
    },
    background: {
      default: background,
    }
  },
  typography:{
    tab:{
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      color: 'white',
      fontFamily: "Aldrich"
    },
    body1:{
      fontFamily: "Aldrich"
    },
    body2:{
      fontFamily: "Aldrich",
      color: "white"
    },
    h2: {
      fontFamily: "Aldrich",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: "white",
      lineHeight: 1.5
    },
    h3: {
      fontFamily: "Aldrich",
      fontSize: "2.5rem",
      color: 'white'
    },
    h4: {
      fontFamily: "Aldrich",
      fontSize: "1.75rem",
      color: "white",
      fontWeight: 500
    },
  },
  overrides:{
    MuiInputLabel: {
      root: {
        color: "white",
        fontSize: "1rem"

      }
    },
    MuiInput:{
      underline:{
        "&:after":{
          borderBottom: `2px solid ${cyan}`
        },
      }
    },
    MuiFormLabel:{
      root:{
        "&.Mui-focused": {
          color: cyan,
        }
      }
    },
    MuiInputBase:{
      input:{
        color: "white"
      }
    },
  },
});