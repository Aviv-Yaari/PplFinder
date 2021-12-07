import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useHistory, useLocation } from "react-router";

const NavBar = () => {
  const location = useLocation();
  const [value, setValue] = useState(0);
  const history = useHistory();

  useEffect(() => {
    setValue(location.pathname === "/favorites" ? 1 : 0);
  }, [location.pathname]);

  const handleChange = (_e, newValue) => {
    switch (newValue) {
      case 1:
        history.push("/favorites");
        break;
      case 0:
        history.push("/");
        break;
    }
  };

  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Home" index={0} />
        <Tab label="Favorites" index={1} />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
