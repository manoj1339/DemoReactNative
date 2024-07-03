import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Plane = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Plane</Text>
        </View>
    );
};

export default Plane;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#222222',
    },
    text: {
        color: '#fff',
    },
});
