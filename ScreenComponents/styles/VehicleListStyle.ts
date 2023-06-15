import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const listStyle = StyleSheet.create({
    vehicleCard: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 16,
        margin: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    vehicleName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    driverName: {
        fontSize: 14,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    category: {
        fontSize: 14,
        width: 100,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: windowWidth * 0.05,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginVertical: 10,
        width: 'auto',
        backgroundColor: '#082567',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
});
