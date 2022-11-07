import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/ui/Theme";
import Header from "./components/ui/Header";
import { useState } from "react";
import StudiesPage from "./pages/StudiesPage";
import Footer from "./components/ui/Footer";
import LoginPage from "./pages/LoginPage";
import {CssBaseline} from "@material-ui/core";
import HomePage from "./pages/HomePage";
import SupportPage from "./pages/SupportPage";
import ProfilePage from "./pages/ProfilePage";
import ScrollToTop from "./components/ui/ScrollToTop";
import ExamsPage from "./pages/ExamsPage";

const App = () => {
  const [tabsValue, setTabsValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
        <ScrollToTop>
        <Header tabsValue={tabsValue} setTabsValue={setTabsValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route exact path="/">
            <HomePage setTabsValue={setTabsValue} setSelectedIndex={setSelectedIndex}/>
          </Route>
          <Route exact path="/login">
            <LoginPage/>
          </Route>
          <Route path="/studies">
            <StudiesPage/>
          </Route>
          <Route path="/exams">
            <ExamsPage/>
          </Route>
          <Route path="/courses">
            <h1>COURSES PAGE</h1>
          </Route>
          <Route path="/profile">
            <ProfilePage/>
          </Route>
          <Route path="/support">
            <SupportPage/>
          </Route>
        </Switch>
        <Footer setTabsValue={setTabsValue} setSelectedIndex={setSelectedIndex}/>
          </ScrollToTop>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
