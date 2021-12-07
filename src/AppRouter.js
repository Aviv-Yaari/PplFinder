import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Favorites, Home } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import { utilService } from "./services/util.service";
import { STORAGE } from "constant";

const AppRouter = () => {
  const [favorites, setFavorites] = useState(
    new Set(utilService.load(STORAGE.favorites))
  );
  const handleFavorite = (userId) => {
    setFavorites((prev) => {
      const favorites = new Set(prev);
      favorites.toggle(userId);
      utilService.save(STORAGE.favorites, [...favorites]);
      return favorites;
    });
  };
  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/favorites">
            <Favorites favorites={favorites} onFavorite={handleFavorite} />
          </Route>
          <Route exact path="/">
            <Home favorites={favorites} onFavorite={handleFavorite} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
