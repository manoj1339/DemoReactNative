import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
// icon
import Entypo from 'react-native-vector-icons/Entypo';

const FAB = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Entypo name="plus" size={16} color={'#868A99'} />
        </TouchableOpacity>
    );
};

export default FAB;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        backgroundColor: '#fff',
    },
});
