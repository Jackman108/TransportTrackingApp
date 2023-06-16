
import { FC, useCallback, useEffect } from 'react';
import { YMaps, Map, Placemark, ZoomControl, FullscreenControl } from '@pbe/react-yandex-maps';
import { MAPS_API_KEY } from "@env";
import {  Dimensions } from 'react-native';
import { YandexMapProps } from '../../interfaces/interfaces';


//Компонент Яндекс.Карты
const YandexMap: FC<YandexMapProps> = ({ defaultCenter, iconImage }: YandexMapProps): JSX.Element => {
    const yandexMapsApiKey: string = MAPS_API_KEY || '';

    const defaultZoom: number = 14;

//Функция для установки куки
    const setCookie = useCallback((name: string, value: string, days: number): void => {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = '; expires=' + date.toUTCString();
        document.cookie = `${name}=${encodeURIComponent(value || '')}; SameSite=Lax; expires=${expires}; path=/`;
    }, []);

    useEffect(() => {
        setCookie('mycookie', 'myvalue', 30);
    }, [setCookie]);

    const windowWidth = Dimensions.get('window').width;

    return (
        <section >
            <YMaps query={{ apikey: yandexMapsApiKey }} >  
                <Map
                    defaultState={{
                        center: defaultCenter,
                        zoom: defaultZoom,
                    }}
                    options={{ suppressMapOpenBlock: true }}
                    width={windowWidth}                    
                >
                    <ZoomControl />
                    <FullscreenControl options={{ float: 'right' }} />
                    <Placemark
                        geometry={defaultCenter}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: iconImage,
                            iconImageSize: [40, 40],
                            iconImageOffset: [-9, -24]
                        }}
                    />
                </Map>
            </YMaps>

        </section>

    );
};

export default YandexMap;