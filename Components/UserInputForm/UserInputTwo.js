import { Formik } from "formik";
import { Button, Text, View, ScrollView } from "react-native";
import { globalStyles } from "../../styles/GlobalStyles";
import { Picker } from "@react-native-picker/picker";
import * as Progress from 'react-native-progress';

export default function UserInputTwo({ navigation }) {
  return (
    <View style={{ ...globalStyles.container }}>
      <Text style={globalStyles.heading}>Personal Information</Text>
      <View style={globalStyles.progressBar}>
        <Progress.Bar progress={0.40} width={null} color={'#008081'} borderWidth={2} borderColor={'#000000'} height={20} borderRadius={27}/>
      </View>
      <Formik
        initialValues={{
          shoppingBags: "",
          bagsCategory: "",
          frequencyTravel: "",
          modeTransport: "",
        }}
        onSubmit={(values) => {
          // obj.push(values);
          console.log(values);
          navigation.push("UserInputThree");
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
                  {/* MARGIN TO ADD Question */}
                {/* <Text style={globalStyles.subHeading}>How large is your family?</Text>
                <TextInput
                  style={globalStyles.input}
                  placeholder="Number of Members"
                  onChangeText={props.handleChange("members")}
                  value={props.values.members} //data binding
                  onBlur={props.handleBlur("members")}
                  keyboardType="numeric"
                /> */}
                {/* <Text >
                  {props.touched.members ? props.errors.members : ""}
                </Text> */}
                
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
                    Rate your frequency of travel:
                  </Text>
                  <Picker
                    selectedValue={props.values.frequencyTravel}
                    onValueChange={props.handleChange("frequencyTravel")}
                    style={globalStyles.dropdown}
                  >
                    <Picker.Item label="Low" value="low" />
                    <Picker.Item label="Moderate" value="moderate" />
                    <Picker.Item label="High" value="high" />
                  </Picker>

                  <Text style={globalStyles.subHeading}>
                    Do You Carry Shopping Bags while going to Shopping
                  </Text>
                  <Picker
                    selectedValue={props.values.shoppingBags}
                    onValueChange={props.handleChange("shoppingBags")}
                    style={globalStyles.dropdown}
                  >
                    <Picker.Item label="No" value="no" />
                    <Picker.Item label="Yes" value="yes" />
                    <Picker.Item label="NA" value="na" />
                  </Picker>
                  
                  {props.values.shoppingBags === "yes" ? (
                    <>
                      <Text style={globalStyles.subHeading}>
                        Which category of bags do you carry?
                      </Text>
                      <Picker
                        selectedValue={props.values.bagsCategory}
                        onValueChange={props.handleChange("bagsCategory")}
                        style={globalStyles.dropdown}
                      >
                        <Picker.Item label="Plastic" value="plastic" />
                        <Picker.Item label="Ecological" value="ecological" />
                      </Picker>
                    </>
                  ) : (
                    <></>
                  )}
                  {props.values.shoppingBags === "no" || props.values.shoppingBags === "na" ? (<Text style={{fontSize: 0}}>{props.values.bagsCategory = ''}</Text>): null}
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
