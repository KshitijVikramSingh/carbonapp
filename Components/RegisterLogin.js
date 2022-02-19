import { Formik } from "formik";
import { Button, Text, View, TextInput, Modal} from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import * as yup from "yup";
import { useState } from "react";
import Login from "./Login";
let ValidationSchema = yup.object({
  username: yup
    .string()
    .required()
    .min(5)
    .matches(/^[a-zA-Z0-9]+$/, "Enter only Letters & Numbers"),
  password: yup.string().required().min(6),
  confirm_password: yup.string().required().oneOf(
    [yup.ref("password"), null],
    "Passwords must match"
  ),
});

export default function RegisterLogin() {
  const [modal, setModal] = useState(false);
  return (
    <View style={globalStyles.container}>
      <Modal visible={modal} animationType="slide">
        <Button title="Close" onPress={() => setModal(false)} />
        <Login />
      </Modal>
      <View style={globalStyles.container}>
        <Text style={globalStyles.heading}>Register</Text>
        <Formik
          initialValues={{ username: "", password: "", confirm_password: "" }}
          validationSchema={ValidationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(props) => {
            return (
              <>
                <Text style={globalStyles.subHeading}>Create Username</Text>
                <TextInput
                  style={globalStyles.input}
                  placeholder="Username"
                  onChangeText={props.handleChange("username")}
                  value={props.values.username} //data binding
                  onBlur={props.handleBlur("username")}
                />
                <Text >
                  {props.touched.username ? props.errors.username : ""}
                </Text>
                <Text style={globalStyles.subHeading}>Create Password</Text>
                <TextInput
                  style={globalStyles.input}
                  placeholder="Password"
                  onChangeText={props.handleChange("password")}
                  value={props.values.password} //data binding
                  onBlur={props.handleBlur("password")}
                />
                <Text style={globalStyles.errorText}>
                  {props.touched.password ? props.errors.password : ""}
                </Text>
                <Text style={globalStyles.subHeading}>Confirm Password</Text>
                <TextInput
                  style={globalStyles.input}
                  placeholder="Password"
                  onChangeText={props.handleChange("confirm_password")}
                  value={props.values.confirm_password} //data binding
                  onBlur={props.handleBlur("confirm_password")}
                />
                <Text style={globalStyles.errorText}>
                  {props.touched.confirm_password ? props.errors.confirm_password : ""}
                </Text>
                <Button
                  title="Register"
                  color="red"
                  onPress={props.handleSubmit}
                />
                <Text style={{ color: "black", textAlign: "center", textDecorationLine: 'underline'} }>
                  Already Registered?{" "}
                  <Text style={{ color: "red"}} onPress={() => setModal(true)}>
                    Login
                  </Text>
                </Text>
              </>
            );
          }}
        </Formik>
      </View>
    </View>
  );
}
