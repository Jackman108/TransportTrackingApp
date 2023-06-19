import { ControlButtonProps } from '../interfaces/interfaces';
import { listStyle } from '../styles/VehicleListStyle';
import { TouchableOpacity, Text } from 'react-native';

// Компонент ControlButton

const ControlButton = ({
    onPress,
    text
}: ControlButtonProps): JSX.Element => {
    return (
        <TouchableOpacity
            style={listStyle.button}
            onPress={onPress}
        >
            <Text style={listStyle.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default ControlButton;