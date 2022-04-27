import { StyleSheet, Image, Text, View } from 'react-native'
import React, { useState } from 'react'
import MapboxGL from '@rnmapbox/maps';
import colors from '@colors';

export default function Map({ item }) {

    MapboxGL.setAccessToken('pk.eyJ1IjoicmVjZXBwb2xhdCIsImEiOiJjbDJnb2R3czgwNTIwM2JuejdycmF2YWFpIn0.moDyElR9peKXplnj83gvMg');

    const getLocationStartPoint = (coordinates = []) => {
        if (!coordinates || coordinates.length == 0)
            return null;

        return <MapboxGL.PointAnnotation id='pointAnnStart' title='Başlangıç' coordinate={coordinates[0]}>
            <View style={{
                height: 20,
                width: 20,
                backgroundColor: colors.purple,
                borderRadius: 50,
                borderColor: 'rgba(112, 48, 160, .6)',
                borderWidth: 5
            }} />
        </MapboxGL.PointAnnotation>;
    }

    const getLocationEndPoint = (coordinates = []) => {
        if (!coordinates || coordinates.length == 0)
            return null;

        return <MapboxGL.PointAnnotation id='pointAnnEnd' title='Bitiş' coordinate={coordinates[coordinates.length - 1]}>
            <View style={{
                height: 20,
                width: 20,
                backgroundColor: colors.purple,
                borderRadius: 50,
                borderColor: 'rgba(112, 48, 160, 1)',
                borderWidth: 5
            }} />
        </MapboxGL.PointAnnotation>;
    }

    const getLocationCenter = (coordinates = []) => {
        if (!coordinates || coordinates.length == 0)
            return null;

        let index = Math.round(coordinates.length / 2);

        return <MapboxGL.Camera
            zoomLevel={12}
            centerCoordinate={coordinates[index]}
        />
    }

    const [line] = useState({
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": item.coordinates
                }
            }
        ]
    });
    return (
        <View style={styles.container}>
            <MapboxGL.MapView
                styleURL={MapboxGL.StyleURL.Street}
                style={styles.map}>

                {getLocationCenter(item.coordinates)}
                {getLocationStartPoint(item.coordinates)}
                {getLocationEndPoint(item.coordinates)}
                <MapboxGL.ShapeSource id='line1' shape={line}>
                    <MapboxGL.LineLayer id='linelayer1' style={styles.line} />
                </MapboxGL.ShapeSource>

            </MapboxGL.MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        flex: 6,
    },
    line: {
        lineColor: colors.purple,
        lineWidth: 5,
        lineJoin: 'bevel'
    },
    map: {
        flex: 1
    },

})