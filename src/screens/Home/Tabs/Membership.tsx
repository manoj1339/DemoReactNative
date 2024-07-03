import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Membership = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Membership</Text>
        </View>
    );
};

export default Membership;

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
