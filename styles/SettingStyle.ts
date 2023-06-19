import { StyleSheet } from 'react-native';


export const settingStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdeaa8',
        alignItems: 'center',

    },
    button: {
        marginTop: 250,
        width: 150,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: '#082567',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        marginHorizontal: 'auto'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    textStyle: {
        color: 'white',
        backgroundColor: '#082567',
        textAlign: 'center',
        paddingTop: 16,
        paddingBottom: 16,
        fontSize: 20,
        width: 400,
    },
});
