import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "./components/index";
import Dashboard from "./components/drugs/dashboard";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import QrCode from "./components/drugs/qrcode";
import Drugs from "./components/drugs/drugs";
import DrugsForm from "./components/drugs/drugsForm";
import UserDrugs from "./components/drugs/userDrug";
import Navbar from "./components/layout/Navbar";
import AuthContext from "./context/AuthContext";
import Search from "./components/drugs/search";
import { EditDrug } from "./components/drugs/editDrug";

function Router() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Index />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        {loggedIn === false && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}
        {loggedIn === true && (
          <>
            <Route exact path="/drug">
              <Drugs />
            </Route>
            <Route exact path="/drugs">
              <UserDrugs />
            </Route>
            {/* QR CODE GENERATE PAGE */}
            <Route exact path="/qrcode">
              <Navbar />
              <QrCode />
            </Route>
            <Route exact path="/regdrug">
              <DrugsForm />
            </Route>
            <Route exact path="/drug/:id/edit">
              <EditDrug />
            </Route>
            <Route exact path="/dashboard">
              <Navbar />
              <Dashboard />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
