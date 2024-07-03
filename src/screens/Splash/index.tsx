import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import GradientCircle from '@components/Circle';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from 'react-native-reanimated';

// This is just a simple SplashScreen.
// To remove the white blank screen we need to create native splash screen.

const Splash = () => {
    const scale = useSharedValue(1);
    const navigation = useNavigation();

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{scale: scale.value}],
        };
    });

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.navigate('Home');
        }, 3000);

        scale.value = withRepeat(withTiming(1.5, {duration: 700}), -1, true);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View style={animatedStyle}>
                <GradientCircle />
            </Animated.View>
        </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#222222',
    },
});
