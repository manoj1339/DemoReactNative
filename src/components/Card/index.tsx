import {View, Text, Image, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
// styles / assets / images
import {styles} from './styles';
import {IMAGES} from '@images';
// Third party
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from 'react-native-reanimated';
import {BlurView} from '@react-native-community/blur';

const Card = () => {
    const move = useSharedValue(0);

    useEffect(() => {
        move.value = withRepeat(withTiming(100, {duration: 3000}), -1, true);
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateY: move.value}],
        };
    });

    return (
        <ImageBackground
            source={IMAGES.card_two_bg}
            resizeMode="stretch"
            style={[styles.container]}>
            <View style={styles.upperSection}>
                <Text style={styles.headerText}>Bank of Designers</Text>
                <View style={styles.chipContactlessContainer}>
                    <Image
                        source={IMAGES.chip}
                        resizeMode="contain"
                        style={styles.smallImage}
                    />
                    <Image
                        source={IMAGES.contactless}
                        resizeMode="contain"
                        style={styles.smallImage}
                    />
                </View>
                <Text style={styles.cardNumber}>3234 8678 4234 7628</Text>
            </View>

            <View style={styles.lowerSection}>
                <View style={styles.firstBox}>
                    <Text style={styles.labelText}>Card Holder name</Text>
                    <Text style={styles.labelValue}>Maya Singh</Text>
                </View>
                <View style={styles.secondBox}>
                    <Text style={styles.labelText}>Expiry Date</Text>
                    <Text style={styles.labelValue}>08/24</Text>
                </View>
                <Image
                    source={IMAGES.vendor}
                    resizeMode="contain"
                    style={[styles.smallImage, styles.thirdBox]}
                />
            </View>
        </ImageBackground>
    );
};

export default Card;
