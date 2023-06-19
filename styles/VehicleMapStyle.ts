import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const mapStyle = StyleSheet.create({

    map: {

        width: windowWidth,
        height: windowWidth / 1.5,

    },
    marker: {
        width: 50,
        height: 50,
    }

})