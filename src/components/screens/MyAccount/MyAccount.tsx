import React from "react";
import { View, Text } from "react-native";

import firebase from "../../../api/firebase";
import Loading from "../../Loaders/Loading";
import LoggedUser from "./LoggedUser";
import GuestUser from "./GuestUser";

const MyAccount = () => {
  const [login, setLogin] = React.useState(null);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setLogin(user ? true : false);
    });
  }, []);

  if (login === null) {
    return <Loading isVisible={true} />;
  }
  return login ? <LoggedUser /> : <GuestUser />;
};

export default MyAccount;
