
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { mapStyle } from '../styles/VehicleMapStyle';
import { VehicleMapProps } from '../interfaces/interfaces';
import { Image } from 'react-native-elements';

//Компонент Карты
const VehicleMap = ({
    longitude,
    latitude,
    iconImage
}: VehicleMapProps): JSX.Element => {
    return (
        <>
            <MapView
                style={mapStyle.map}
                initialRegion={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {/* Маркер транспортного средства */}
                <Marker
                    coordinate={{ latitude, longitude }}
                >
                    {/* Изображение маркера */}
                    <Image
                        style={mapStyle.marker}
                        source={{
                            uri: iconImage,
                            cache: 'default',
                        }}
                    />
                </Marker>
            </MapView>

        </>
    );
};

export default VehicleMap;