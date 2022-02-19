import { Formik } from 'formik';
import { Button, Text, View, TextInput,Modal, Linking } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import * as yup from 'yup';

let ValidationSchema = yup.object({
    cool: yup.string()
        .required()
        .min(5)
        .matches(/^[a-zA-Z0-9]+$/,'Enter only Letters & Numbers'),
    password: yup.string().required().min(6),
});

export default function Login() {
    return( 
            <View style={{...globalStyles.container, backgroundColor:'lime'}}>
                <Text style={globalStyles.heading}>Login</Text>
                <Formik
                    initialValues={{cool:'', password:''}}
                    // validationSchema={ValidationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {(props) => {
                        return(
                        <>
                            <Text style={globalStyles.subHeading}>Enter cool</Text>
                            <TextInput
                                style={globalStyles.input}
                                placeholder="cool"
                                onChangeText={props.handleChange("cool")}
                                value={props.values.cool} //data binding
                                onBlur={props.handleBlur("cool")}
                            />
                            <Text style={globalStyles.errorText}>
                                {props.touched.cool ? props.errors.cool : ""}
                            </Text>
                            <Text style={globalStyles.subHeading}>Enter Password</Text>
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
                            <Button title="Login" color="red" onPress={props.handleSubmit} />
                        </>
                        )
                    }}
                </Formik>
            </View>
    )
}