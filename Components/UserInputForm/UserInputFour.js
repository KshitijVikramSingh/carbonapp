import { Formik } from "formik";
import { Button, Text, View, ScrollView } from "react-native";
import { globalStyles } from "../../styles/GlobalStyles";
import { Picker } from "@react-native-picker/picker";
import * as Progress from 'react-native-progress';

export default function UserInputFour({ navigation }) {
  return (
    <View style={{ ...globalStyles.container }}>
      <Text style={globalStyles.heading}>Environmental Issues</Text>
      <View style={globalStyles.progressBar}>
        <Progress.Bar progress={0.80} width={null} color={'#008081'} borderWidth={2} borderColor={'#000000'} height={20} borderRadius={27}/>
      </View>
      <Formik
        initialValues={{
          interestInClimateChange: "",
          effectsNoticeabilityToday: "",
          effectsNoticeabilityNearFuture: "",
          effectsNoticeabilityFarFuture: "",
          responsibleBehaviour: "",
          willingnessToContribute: "",
          acceptingResponsibility: "",
          willingnessToAct: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          navigation.push("UserInputFive");
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
                    I am interested in Global Warming / Climate Change
                  </Text>
                  <Picker
                    selectedValue={props.values.interestInClimateChange}
                    onValueChange={props.handleChange(
                      "interestInClimateChange"
                    )}
                    style={globalStyles.dropdown}
                  >
                    <Picker.Item label="Strongly Agree" value="stronglyagree" />
                    <Picker.Item label="Agree" value="agree" />
                    <Picker.Item
                      label="Agree to some extent"
                      value="agreetosomeextent"
                    />
                    <Picker.Item
                      label="Don't fully agree"
                      value="dontfullyagree"
                    />
                    <Picker.Item label="Don't agree" value="dontagree" />
                    <Picker.Item
                      label="Completely Disagree"
                      value="completelydisagree"
                    />
                  </Picker>

                  <Text style={globalStyles.subHeading}>
                    The effects of global warming/climate change are really
                    noticeable today
                  </Text>
                  <Picker
                    selectedValue={props.values.effectsNoticeabilityToday}
                    onValueChange={props.handleChange(
                      "effectsNoticeabilityToday"
                    )}
                    style={globalStyles.dropdown}
                  >
                    <Picker.Item label="Strongly Agree" value="stronglyagree" />
                    <Picker.Item label="Agree" value="agree" />
                    <Picker.Item
                      label="Agree to some extent"
                      value="agreetosomeextent"
                    />
                    <Picker.Item
                      label="Don't fully agree"
                      value="dontfullyagree"
                    />
                    <Picker.Item label="Don't agree" value="dontagree" />
                    <Picker.Item
                      label="Completely Disagree"
                      value="completelydisagree"
                    />
                  </Picker>

                  <Text style={globalStyles.subHeading}>
                    The effects of global warming/climate change are really
                    noticeable in the near future
                  </Text>
                  <Picker
                    selectedValue={props.values.effectsNoticeabilityNearFuture}
                    onValueChange={props.handleChange(
                      "effectsNoticeabilityNearFuture"
                    )}
                    style={globalStyles.dropdown}
                  >
                    <Picker.Item label="Strongly Agree" value="stronglyagree" />
                    <Picker.Item label="Agree" value="agree" />
                    <Picker.Item
                      label="Agree to some extent"
                      value="agreetosomeextent"
                    />
                    <Picker.Item
                      label="Don't fully agree"
                      value="dontfullyagree"
                    />
                    <Picker.Item label="Don't agree" value="dontagree" />
                    <Picker.Item
                      label="Completely Disagree"
                      value="completelydisagree"
                    />
                  </Picker>

                  <Text style={globalStyles.subHeading}>
                    The effects of global warming/climate change are really
                    noticeable in the far future
                  </Text>
                  <Picker
                    selectedValue={props.values.effectsNoticeabilityFarFuture}
                    onValueChange={props.handleChange(
                      "effectsNoticeabilityFarFuture"
                    )}
                    style={globalStyles.dropdown}
                  >
                    <Picker.Item label="Strongly Agree" value="stronglyagree" />
                    <Picker.Item label="Agree" value="agree" />
                    <Picker.Item
                      label="Agree to some extent"
                      value="agreetosomeextent"
                    />
                    <Picker.Item
                      label="Don't fully agree"
                      value="dontfullyagree"
                    />
                    <Picker.Item label="Don't agree" value="dontagree" />
                    <Picker.Item
                      label="Completely Disagree"
                      value="completelydisagree"
                    />
                  </Picker>

                  <Text style={globalStyles.subHeading}>
                    I am responsible for global warming/climate change
                  </Text>
                  <Picker
                    selectedValue={props.values.acceptingResponsibility}
                    onValueChange={props.handleChange(
                      "acceptingResponsibility"
                    )}
                    style={globalStyles.dropdown}
                  >
                    <Picker.Item label="Strongly Agree" value="stronglyagree" />
                    <Picker.Item label="Agree" value="agree" />
                    <Picker.Item
                      label="Agree to some extent"
                      value="agreetosomeextent"
                    />
                    <Picker.Item
                      label="Don't fully agree"
                      value="dontfullyagree"
                    />
                    <Picker.Item label="Don't agree" value="dontagree" />
                    <Picker.Item
                      label="Completely Disagree"
                      value="completelydisagree"
                    />
                  </Picker>

                  <Text style={globalStyles.subHeading}>
                    I want to make a contribution to society by reducing
                    environmental impacts.
                  </Text>
                  <Picker
                    selectedValue={props.values.willingnessToContribute}
                    onValueChange={props.handleChange(
                      "willingnessToContribute"
                    )}
                    style={globalStyles.dropdown}
                  >
                    <Picker.Item label="Strongly Agree" value="stronglyagree" />
                    <Picker.Item label="Agree" value="agree" />
                    <Picker.Item
                      label="Agree to some extent"
                      value="agreetosomeextent"
                    />
                    <Picker.Item
                      label="Don't fully agree"
                      value="dontfullyagree"
                    />
                    <Picker.Item label="Don't agree" value="dontagree" />
                    <Picker.Item
                      label="Completely Disagree"
                      value="completelydisagree"
                    />
                  </Picker>

                  <Text style={globalStyles.subHeading}>
                    It is the responsibility of me as a member of society to
                    reduce environmental impact.
                  </Text>
                  <Picker
                    selectedValue={props.values.responsibleBehaviour}
                    onValueChange={props.handleChange("responsibleBehaviour")}
                    style={globalStyles.dropdown}
                  >
                    <Picker.Item label="Strongly Agree" value="stronglyagree" />
                    <Picker.Item label="Agree" value="agree" />
                    <Picker.Item
                      label="Agree to some extent"
                      value="agreetosomeextent"
                    />
                    <Picker.Item
                      label="Don't fully agree"
                      value="dontfullyagree"
                    />
                    <Picker.Item label="Don't agree" value="dontagree" />
                    <Picker.Item
                      label="Completely Disagree"
                      value="completelydisagree"
                    />
                  </Picker>

                  <Text style={globalStyles.subHeading}>
                    I am willing to act in a way that reduces my carbon emission
                  </Text>
                  <Picker
                    selectedValue={props.values.willingnessToAct}
                    onValueChange={props.handleChange("willingnessToAct")}
                    style={globalStyles.dropdown}
                  >
                    <Picker.Item label="Strongly Agree" value="stronglyagree" />
                    <Picker.Item label="Agree" value="agree" />
                    <Picker.Item
                      label="Agree to some extent"
                      value="agreetosomeextent"
                    />
                    <Picker.Item
                      label="Don't fully agree"
                      value="dontfullyagree"
                    />
                    <Picker.Item label="Don't agree" value="dontagree" />
                    <Picker.Item
                      label="Completely Disagree"
                      value="completelydisagree"
                    />
                  </Picker>
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
