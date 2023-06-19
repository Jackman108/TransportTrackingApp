import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const listStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdeaa8',
    },
    vehicleCard: {
        borderWidth: 1,
        borderColor: '#082567',
        borderRadius: 8,
        padding: 16,
        margin: 8,
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
        paddingHorizontal: windowWidth * 0.01,
        marginVertical: 10,
    },

    button: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#082567',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2,

    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
        marginVertical: 5,
    },

    resetButton: {
        marginRight: 10,
    },

    resetIcon: {
        width: 24,
        height: 24,
    },
    loading: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 20,
        color: '#082567',
    },
});
