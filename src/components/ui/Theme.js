import {createMuiTheme} from "@material-ui/core/styles";

const green = "#9fce4b";
const phlox = "#e600ff";
const ming = "#326771";
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
    }
  },
  overrides:{},
});