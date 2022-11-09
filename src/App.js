import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/ui/Theme";
import Header from "./components/ui/Header";
import { useContext, useState } from "react";
import StudiesPage from "./pages/StudiesPage";
import Footer from "./components/ui/Footer";
import LoginPage from "./pages/LoginPage";
import { CssBaseline } from "@material-ui/core";
import HomePage from "./pages/HomePage";
import SupportPage from "./pages/SupportPage";
import ProfilePage from "./pages/ProfilePage";
import ScrollToTop from "./components/ui/ScrollToTop";
import ExamsPage from "./pages/ExamsPage";
import AuthContext from "./context/auth-context";

const App = () => {
  const [tabsValue, setTabsValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop>
          {isLoggedIn && (
            <Header
              tabsValue={tabsValue}
              setTabsValue={setTabsValue}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          )}
          <Switch>
            <Route exact path="/">
              {isLoggedIn ? (
                <HomePage
                  setTabsValue={setTabsValue}
                  setSelectedIndex={setSelectedIndex}
                />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route exact path="/login">
              {isLoggedIn ? (
                <HomePage
                  setTabsValue={setTabsValue}
                  setSelectedIndex={setSelectedIndex}
                />
              ) : (
                <LoginPage />
              )}
            </Route>
            <Route path="/studies">
              {isLoggedIn ? (
                <StudiesPage
                  setTabsValue={setTabsValue}
                  setSelectedIndex={setSelectedIndex}
                />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/exams">
              {isLoggedIn ? (
                <ExamsPage
                  setTabsValue={setTabsValue}
                  setSelectedIndex={setSelectedIndex}
                />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/courses">
              {isLoggedIn ? <h1>COURSES PAGE</h1> : <Redirect to="/login" />}
            </Route>
            <Route path="/profile">
              {isLoggedIn ? (
                <ProfilePage
                  setTabsValue={setTabsValue}
                  setSelectedIndex={setSelectedIndex}
                />
              ) : (
                <Redirect to='/login'/>
              )}
            </Route>
            <Route path="/support">
              {isLoggedIn ? (
                <SupportPage
                  setTabsValue={setTabsValue}
                  setSelectedIndex={setSelectedIndex}
                />
              ) : (
                <Redirect to='/login'/>
              )}
            </Route>
          </Switch>
          <Footer
            setTabsValue={setTabsValue}
            setSelectedIndex={setSelectedIndex}
          />
        </ScrollToTop>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
