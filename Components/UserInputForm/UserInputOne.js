import { Formik } from "formik";
import { Button, Text, View, TextInput, ScrollView } from "react-native";
import { globalStyles } from "../../styles/GlobalStyles";
import * as yup from "yup";
import { Picker } from "@react-native-picker/picker";
import * as Progress from 'react-native-progress';
let ValidationSchema = yup.object({
  fiNonVeg: yup.number().min(0),
});

export default function UserInputOne({ navigation }) {
  return (
    <View style={{ ...globalStyles.container }}>
      <Text style={globalStyles.heading}>Personal Information</Text>
      <View style={globalStyles.progressBar}>
        <Progress.Bar progress={0.20} width={null} color={'#008081'} borderWidth={2} borderColor={'#000000'} height={20} borderRadius={27}/>
      </View>
      <Formik
        initialValues={{
          age: "",
          gender: "",
          education: "",
          food: "",
          fiNonVeg: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values) => {
          console.log(obj);
          navigation.push("UserInputTwo");
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
                <Text style={globalStyles.subHeading}>
                  Enter Your Age Group
                </Text>
                <Picker
                  selectedValue={props.values.age}
                  onValueChange={props.handleChange("age")}
                  style={globalStyles.dropdown}
                >
                  <Picker.Item label="18-25" value="18-35" />
                  <Picker.Item label="25-34" value="25-34" />
                  <Picker.Item label="34+" value="34+" />
                </Picker>

                <Text style={globalStyles.subHeading}>Enter Your Gender</Text>
                <Picker
                  selectedValue={props.values.gender}
                  onValueChange={props.handleChange("gender")}
                  style={globalStyles.dropdown}
                >
                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="female" />
                  <Picker.Item label="Others" value="others" />
                </Picker>

                <Text style={globalStyles.subHeading}>
                  Enter Your Educational Qualification
                </Text>
                <Picker
                  selectedValue={props.values.education}
                  onValueChange={props.handleChange("education")}
                  style={globalStyles.dropdown}
                >
                  <Picker.Item label="Postgraduate" value="postgraduate" />
                  <Picker.Item label="Graduate" value="graduate" />
                  <Picker.Item label="Undergraduate" value="undergraduate" />
                  <Picker.Item label="Class 12" value="class_twelve" />
                  <Picker.Item
                    label="Below Class 12"
                    value="below_class_twelve"
                  />
                </Picker>

                <Text style={globalStyles.subHeading}>
                  What is your preferred category of food?
                </Text>
                <Picker
                  selectedValue={props.values.food}
                  onValueChange={props.handleChange("food")}
                  style={globalStyles.dropdown}
                >
                  <Picker.Item label="Vegetarian" value="vegetarian" />
                  <Picker.Item label="Non-Vegetarian" value="non_vegetarian" />
                  <Picker.Item label="Vegan" value="vegan" />
                </Picker>

                {props.values.food === "non_vegetarian" ? (
                  <>
                    <Text style={globalStyles.subHeading}>
                      How frequently do you eat non-veg (in a week)?
                    </Text>
                    <TextInput
                      style={globalStyles.input}
                      placeholder="Number of Times"
                      onChangeText={props.handleChange("fiNonVeg")}
                      value={props.values.fiNonVeg} //data binding
                      onBlur={props.handleBlur("fiNonVeg")}
                      keyboardType="numeric"
                    />
                    <Text style={globalStyles.errorText}>
                      {props.touched.fiNonVeg ? props.errors.fiNonVeg : ""}
                    </Text>
                  </>
                ) : (
                  <></>
                )}

                {props.values.food !== "non_vegetarian" ? (
                  <Text style={{ fontSize: 0 }}>
                    {(props.values.fiNonVeg = "0")}
                  </Text>
                ) : null}
              </ScrollView>  
              <View style={globalStyles.fixToText}>
                <Button
                  title={String.fromCharCode(8592) + "Prev"}
                  color="red"
                  disabled
                />
                <Button
                  title={"Next" + String.fromCharCode(8594)}
                  color="red"
                  onPress={props.handleSubmit}
                />
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
}
