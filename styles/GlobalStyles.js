import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        padding: 10,
        flex:1,
        justifyContent: 'center'
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10
    },
    subHeading:{
        fontSize: 18,
    },
    input: {
        backgroundColor:"#f2f2f2",
        borderColor: "#ddd",
        borderWidth: 1,
        padding: 10,
        fontSize: 18,
        margin: 10
    },
    errorText: {
        color: 'grey',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    }
})