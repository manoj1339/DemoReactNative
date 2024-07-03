import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
// data
import {CARD_DATA} from '../card_data';
// components
import Card from '@components/Card';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {WINDOW_WIDTH} from '@utils/constants';
import {useSharedValue} from 'react-native-reanimated';
import FAB from '@components/FAB';

const Fingerprint = () => {
    const sequence = useSharedValue(['1', '2', '3', '4']);

    const onCardChange = (resp: any) => {
        sequence.value = [...resp];
    };

    return (
        <GestureHandlerRootView style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                {CARD_DATA.map((item, index: number) => {
                    return (
                        <Card
                            key={item.id}
                            backgroundImage={item.backgroundImage}
                            index={index}
                            id={item.id}
                            sequence={sequence}
                            onCardChange={onCardChange}
                        />
                    );
                })}
            </ScrollView>
            <FAB />
        </GestureHandlerRootView>
    );
};

export default Fingerprint;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222222',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    contentContainer: {
        flexGrow: 1,
        paddingBottom: 150,
        paddingTop: 50,
        minHeight: 500,
    },
});
