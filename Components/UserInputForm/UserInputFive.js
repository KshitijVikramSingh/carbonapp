import { Formik } from "formik";
import { Button, Text, View, ScrollView } from "react-native";
import { globalStyles } from "../../styles/GlobalStyles";
import { Picker } from "@react-native-picker/picker";
import * as Progress from 'react-native-progress';

export default function UserInputFive({navigation}) {
  return (
    <View style={{ ...globalStyles.container }}>
      <Text style={globalStyles.heading}>Personal Action</Text>
      <View style={globalStyles.progressBar}>
        <Progress.Bar progress={1.00} width={null} color={'#008081'} borderWidth={2} borderColor={'#000000'} height={20} borderRadius={27}/>
      </View>
      <Formik
        initialValues={{
          alreadyActing: "",
          dontKnowWhatTodo: "",
          noActionIfEffortIsRequired: "",
          noActionIfTimeIsRequired: "",
          noActionIfExtraCostAssociated: "",
          noDifferenceCausedByAction: "",
          willingToActAlongWithOthers: "",
          willingToActIfProfitablePersonal: "",
          willingToActIfProfitableSociety: "",
        }}
        onSubmit={(values) => {
          console.log(values);
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
                    I already act to reduce the effects of global
                    warming/climate change as long as i can do.
                  </Text>
                  <Picker
                    selectedValue={props.values.alreadyActing}
                    onValueChange={props.handleChange("alreadyActing")}
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
                    I don't know what I should do.
                  </Text>
                  <Picker
                    selectedValue={props.values.dontKnowWhatTodo}
                    onValueChange={props.handleChange("dontKnowWhatTodo")}
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
                    I don't want to act if it causes effort.
                  </Text>
                  <Picker
                    selectedValue={props.values.noActionIfEffortIsRequired}
                    onValueChange={props.handleChange(
                      "noActionIfEffortIsRequired"
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
                    I don't want to act if it requires time.
                  </Text>
                  <Picker
                    selectedValue={props.values.noActionIfTimeIsRequired}
                    onValueChange={props.handleChange(
                      "noActionIfTimeIsRequired"
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
                    I don't want to act if my actions are associated with extra
                    cost.
                  </Text>
                  <Picker
                    selectedValue={props.values.noActionIfExtraCostAssociated}
                    onValueChange={props.handleChange(
                      "noActionIfExtraCostAssociated"
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
                    Actions taken by only me will not change anything at all.
                  </Text>
                  <Picker
                    selectedValue={props.values.noDifferenceCausedByAction}
                    onValueChange={props.handleChange(
                      "noDifferenceCausedByAction"
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
                    I am willing to act if others also act.
                  </Text>
                  <Picker
                    selectedValue={props.values.willingToActAlongWithOthers}
                    onValueChange={props.handleChange(
                      "willingToActAlongWithOthers"
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
                    I am willing to be more active if I can understand how
                    profitable my actions are for me.
                  </Text>
                  <Picker
                    selectedValue={
                      props.values.willingToActIfProfitablePersonal
                    }
                    onValueChange={props.handleChange(
                      "willingToActIfProfitablePersonal"
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
                    I am willing to be more active if I can understand how
                    profitable my actions are for the society.
                  </Text>
                  <Picker
                    selectedValue={props.values.willingToActIfProfitableSociety}
                    onValueChange={props.handleChange(
                      "willingToActIfProfitableSociety"
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
                  title={"Submit" + String.fromCharCode(8594)}
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
