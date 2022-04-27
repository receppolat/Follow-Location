import { TouchableOpacity, Dimensions, Image, StyleSheet, Text, View, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react';

import { store } from '../../../../redux/store';
import { addFavorite, removeFavorite } from '../../../../redux/favorites/action';
import colors from '@colors';
import { useNavigation, CommonActions } from '@react-navigation/native';

const favTrue = require("@images/favorite.png");
const favFalse = require("@images/unFavorite.png");
const windowWidth = Dimensions.get('window').width;

export default function index({ item, distance }) {
    const navigation = useNavigation();
    const [isFavorite, setIsFavorite] = useState(false);


    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            goBack();
            return true;
        });
        setIsFavorite(store.getState().favorites.favoriteIds.indexOf(item.id) > -1);

        return () => backHandler.remove();
    }, []);


    const setFavorite = (id) => {
        if (store.getState().favorites.favoriteIds.indexOf(id) > -1) {
            store.dispatch(removeFavorite(id));
            setIsFavorite(false);
        }
        else {
            store.dispatch(addFavorite(id));
            setIsFavorite(true);
        }
    }

    const goBack = () => navigation.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{ name: 'LocationStack' }]
        })
    );

    const icon = isFavorite ? favTrue : favFalse;
    return (
        <View style={styles.container}>
            <View style={styles.inContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.description}</Text>
                <TouchableOpacity style={styles.goBack} onPress={() => goBack()}>
                    <Text style={{ color: colors.purple, }}> {'< '}Geri Dön</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.outContainer}>
                <TouchableOpacity onPress={() => setFavorite(item.id)} style={styles.fav}>
                    <Image source={icon} style={styles.fav} />
                </TouchableOpacity>
                <View style={styles.underContainer}>
                    <Text style={styles.distance}>Mesafe</Text>
                    <Text style={styles.meter}>{(distance * 1000).toFixed(0)} m</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: 'white',
        borderColor: colors.purple,
        borderWidth: 2,
        width: '100%',
        height: '100%',
        marginTop: '-12%',
        flexDirection: 'row',
    },
    inContainer: {
        flexDirection: 'column',
        margin: '5%',
        flex: 5,
    },
    outContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 2
    },
    underContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    fav: {
        width: windowWidth * 0.1,
        height: windowWidth * 0.1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.black,
        flex: 2
    },
    text: {
        fontSize: 14,
        color: 'rgba(0,0,0,.5)',
        flex: 4,
    },
    goBack: {
        fontSize: 12,
        flex: 1,
    },
    distance: {
        fontSize: 11,
        color: 'rgba(0,0,0,.5)'
    },
    meter: {
        fontSize: 20,
        color: colors.black,
    }
})