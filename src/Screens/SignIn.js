import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  ActivityIndicator,
  Alert,
  AsyncStorage,
} from "react-native";
import { Auth } from "aws-amplify";
import { UserStyle } from "../styles/UserStyle";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const initialState = {
  Username: "",
  password: "",
};

export default (props) => {
  const navigation = useNavigation();
  const [formState, setFormState] = useState(initialState);
  const [isLoading, setLoading] = useState(false);

  const onHandleChange = (key, value) => {
    setFormState({ ...formState, [key]: value });
  };

  const handleSubmit = async () => {
    try {
      const FormState = { ...formState };
      setLoading(true);
      let username = FormState.Username;
      let password = FormState.password;

      const user = await Auth.signIn(username, password);
      // const data = await Auth.currentAuthenticatedUser();
      // const token = await data.signInUserSession.idToken.jwtToken;
      // // console.log(token, "testing");
      // const uaerToken = await AsyncStorage.setItem("token", token);
      // console.log(uaerToken, "uaetoken");
      // const { signInUserSession } = data;
      setLoading(false);
      Alert.alert("Successfully Login");
      navigation.navigate("Home");
    } catch (error) {
      setLoading(false);
      console.log(error, "erorororor");
      Alert.alert(error.message);
    }
  };

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 40, y: 0 }}
      contentContainerStyle={UserStyle.sigInView}
      // scrollEnabled={false}
      // extraScrollHeight={40}
      scrollEnabled={true}
    >
      <TouchableOpacity style={UserStyle.socialButton}>
        <Image
          source={require("../../assets/google.png")}
          style={UserStyle.icon}
        />
        <Text style={UserStyle.textStyle}>Sign in With Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={UserStyle.socialButton}>
        <Image source={require("../../assets/fb.png")} style={UserStyle.icon} />
        <Text style={UserStyle.textStyle}>Sign in With Facebook</Text>
      </TouchableOpacity>
      <Text style={UserStyle.ORtextStyle}>Or</Text>
      <View style={UserStyle.formStyle}>
        <View style={UserStyle.textInputContiner}>
          <Image
            source={require("../../assets/user.png")}
            style={UserStyle.textFieldIcon}
          />

          <TextInput
            style={UserStyle.textInput}
            placeholder="Username"
            placeholderTextColor="#000"
            value={formState.Username}
            onChangeText={(val) => onHandleChange("Username", val)}
          />
        </View>
        <View style={UserStyle.textInputContiner}>
          <Image
            source={require("../../assets/lock.png")}
            style={UserStyle.textFieldIcon}
          />
          <TextInput
            style={UserStyle.textInput}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#000"
            value={formState.password}
            onChangeText={(val) => onHandleChange("password", val)}
          />
        </View>
        <TouchableOpacity style={UserStyle.buttonStyle} onPress={handleSubmit}>
          {isLoading ? (
            <ActivityIndicator animating={isLoading} />
          ) : (
            <Text>Login</Text>
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};
