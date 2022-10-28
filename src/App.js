import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/ui/Theme";
import Header from "./components/ui/Header";
import { useState } from "react";
import StudiesPage from "./pages/StudiesPage";
import Footer from "./components/ui/Footer";

const App = () => {
  const [tabsValue, setTabsValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header tabsValue={tabsValue} setTabsValue={setTabsValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route exact path="/">
            <h1 style={{marginBottom: "500px"}}>HOME PAGE</h1>
          </Route>
          <Route path="/studies">
            <StudiesPage/>
          </Route>
          <Route path="/exams">
            <h1>EXAMS PAGE</h1>
          </Route>
          <Route path="/courses">
            <h1>COURSES PAGE</h1>
          </Route>
          <Route path="/profile">
            <h1>PROFILE PAGE</h1>
          </Route>
          <Route path="/support">
            <h1>SUPPORT PAGE</h1>
          </Route>
        </Switch>
        <Footer setTabsValue={setTabsValue} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
