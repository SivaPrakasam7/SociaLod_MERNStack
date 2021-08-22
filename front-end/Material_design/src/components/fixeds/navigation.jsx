import {
  BottomNavigation,
  BottomNavigationAction,
  AppBar,
  // Typography,
} from "@material-ui/core";
import { Search, Home, Contacts, Person } from "@material-ui/icons";
import { useState } from "react";
import useStyles from "../style";
import CKIE from "../../fucntions/basic/checkCK";

export default function NavigationBar() {
  const [value, setValue] = useState(window.location.hash.toString()),
    classes = useStyles(),
    check = CKIE();
  return (
    <AppBar
      className={classes.bottomFixed}
      style={{
        position: "relative"
      }}
    >
      <BottomNavigation
        value={value}
        onChange={(e, val) => {
          setValue(val);
        }}
        showLabels
      >
        <BottomNavigationAction
          label="Home"
          value="#/"
          icon={<Home />}
          href="#/"
        />
        {check && (
          <BottomNavigationAction
            label="Search"
            value="#/search"
            icon={<Search />}
            href="#/search"
          />
        )}
        {!check && (
          <BottomNavigationAction
            label="SignIn/Up"
            value="#/signin"
            icon={<Person />}
            href="#/signin"
          />
        )}
        {check && (
          <BottomNavigationAction
            label="Account"
            value="#/account"
            icon={<Person />}
            href="#/account"
          />
        )}
        <BottomNavigationAction
          label="Contact"
          value="#/contact"
          icon={<Contacts />}
          href="#/contact"
        />
      </BottomNavigation>
    </AppBar>
  );
}
