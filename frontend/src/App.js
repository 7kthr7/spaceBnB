import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
//import SignupFormModal from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import GetSpots from "./components/LandingPage";
import SingleSpot from "./components/SingleSpot";
import UserSpot from "./components/ManageSpots";
import UpdateSpot from "./components/UpdateSpot";
import CreateSpot from "./components/SpotForm";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded &&

        <Switch>

          <Route exact path="/">
            <GetSpots />
          </Route>

          <Route exact path="/spots/current">
            <UserSpot />
          </Route>

          <Route exact path="/spots/new">
            < CreateSpot />
          </Route>

          <Route exact path="/spots/:spotId">
            <SingleSpot />
          </Route>

          <Route exact path="/spots/:spotId/edit">
            <UpdateSpot />
          </Route>

        </Switch>
      }

    </>
  );
}

export default App;
