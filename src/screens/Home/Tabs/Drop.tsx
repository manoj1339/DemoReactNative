import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Drop = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Drop</Text>
        </View>
    );
};

export default Drop;

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
