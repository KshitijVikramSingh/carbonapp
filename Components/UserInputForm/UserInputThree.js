import { Formik } from "formik";
import {
  Button,
  Text,
  View,
  ScrollView,
} from "react-native";
import { globalStyles } from "../../styles/GlobalStyles";
import * as yup from "yup";
import { Picker } from "@react-native-picker/picker";
import * as Progress from 'react-native-progress';
let ValidationSchema = yup.object({});

export default function UserInputTwo({ navigation }) {
  return (
    <View style={{ ...globalStyles.container }}>
      <Text style={globalStyles.heading}>Personal Information</Text>
      <View style={globalStyles.progressBar}>
        <Progress.Bar progress={0.60} width={null} color={'#008081'} borderWidth={2} borderColor={'#000000'} height={20} borderRadius={27}/>
      </View>
      <Formik
        initialValues={{
          judiciousUsage: "",
          waterUsage: "",
          electricUsage: "",
          heater: "",
          modeTransport: "",
          ACusage: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values) => {
          // obj.push(values);
          console.log(values);
          navigation.push("UserInputFour");
        }}
      >
        {(props) => {
          return (
            <>
              <ScrollView
                contentContainerStyle={{
                  flexGrow: 1,
                  justifyContent: "flex-start",
                }}
              >
                <View>
                  <Text style={globalStyles.subHeading}>
                    What is your preferred mode of transport?
                  </Text>
                  <Picker
                    selectedValue={props.values.modeTransport}
                    onValueChange={props.handleChange("modeTransport")}
                    style={globalStyles.dropdown}
                  >
                    <Picker.Item label="Public" value="public" />
                    <Picker.Item label="Private" value="private" />
                  </Picker>

                  <Text style={globalStyles.subHeading}>
                    Do you use Water/Electricity Judiciously?
                  </Text>
                  <Picker
                    selectedValue={props.values.judiciousUsage}
                    onValueChange={props.handleChange("judiciousUsage")}
                    style={globalStyles.dropdown}
                  >
                    <Picker.Item label="Yes" value="yes" />
                    <Picker.Item label="No" value="no" />
                  </Picker>

                  <Text style={globalStyles.subHeading}>
                    Rate your water usage:
                  </Text>
                  <Picker
                    selectedValue={props.values.waterUsage}
                    onValueChange={props.handleChange("waterUsage")}
                    style={globalStyles.dropdown}
                  >
                    <Picker.Item label="Low" value="low" />
                    <Picker.Item label="Moderate" value="moderate" />
                    <Picker.Item label="High" value="high" />
                  </Picker>

                  <Text style={globalStyles.subHeading}>
                    Rate your Electricity usage:
                  </Text>
                  <Picker
                    selectedValue={props.values.electricUsage}
                    onValueChange={props.handleChange("electricUsage")}
                    style={globalStyles.dropdown}
                  >
                    <Picker.Item label="Low" value="low" />
                    <Picker.Item label="Moderate" value="moderate" />
                    <Picker.Item label="High" value="high" />
                  </Picker>

                  <Text style={globalStyles.subHeading}>
                    Do you use Heater or Airconditioner?
                  </Text>
                  <Picker
                    selectedValue={props.values.heater}
                    onValueChange={props.handleChange("heater")}
                    style={globalStyles.dropdown}
                  >
                    <Picker.Item label="No" value="no" />
                    <Picker.Item label="Yes" value="yes" />
                  </Picker>

                  {props.values.heater === "yes" ? (
                    <>
                      <Text style={globalStyles.subHeading}>
                        Rate your usage of Heater, Airconditioner
                      </Text>
                      <Picker
                        selectedValue={props.values.ACusage}
                        onValueChange={props.handleChange("ACusage")}
                        style={globalStyles.dropdown}
                      >
                        <Picker.Item label="Low" value="low" />
                        <Picker.Item label="Moderate" value="moderate" />
                        <Picker.Item label="High" value="high" />
                      </Picker>
                    </>
                  ) : (
                    <></>
                  )}
                  {props.values.heater === "no" ? (<Text style={{fontSize: 0}}>{props.values.ACusage = ''}</Text>): null}
                </View>
              </ScrollView>
              <View style={globalStyles.fixToText}>
                <Button
                  title={String.fromCharCode(8592) + "Prev"}
                  color="red"
                  onPress={() => {
                    navigation.pop();
                  }}
                />
                <Button
                  title={"Next" + String.fromCharCode(8594)}
                  color="red"
                  onPress={() => {
                    props.handleSubmit();
                  }}
                />
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
}
