import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const History = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>History</Text>
        </View>
    );
};

export default History;

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
