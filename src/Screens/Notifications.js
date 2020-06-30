import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import {
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";

import { notificationsVariable } from "../utils/common";

import CommanElement from "../Components/Wrapper/CommanElement";

const Notifications = (props) => {
  return (
    <ScrollView>
      <CommanElement dataArray={notificationsVariable} {...props} />
    </ScrollView>
  );
};

export default Notifications;