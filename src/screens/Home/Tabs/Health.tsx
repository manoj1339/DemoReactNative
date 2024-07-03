import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Health = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Health</Text>
        </View>
    );
};

export default Health;

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
