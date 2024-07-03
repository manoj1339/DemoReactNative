import {
    View,
    Text,
    Image,
    ImageBackground,
    ImageSourcePropType,
} from 'react-native';
import React from 'react';
// styles / assets / images
import {styles} from './styles';
import {IMAGES} from '@images';
import {WINDOW_WIDTH} from '@utils/constants';
// Gestures
import {
    GestureHandlerRootView,
    GestureDetector,
    Gesture,
} from 'react-native-gesture-handler';
// animation
import Animated, {
    SharedValue,
    runOnJS,
    useAnimatedReaction,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from 'react-native-reanimated';

const changeSequence = (array: any) => {
    'worklet';
    let arr = [...array];
    arr.unshift(arr.pop());
    return arr;
};

type CardProps = {
    backgroundImage: ImageSourcePropType | undefined;
    index: number;
    id: string;
    onCardChange?: (res: any) => void;
    sequence?: any;
};

const Card = ({
    backgroundImage,
    index,
    id,
    onCardChange = () => '',
    sequence,
    ...props
}: CardProps) => {
    console.log(sequence.value);
    const translationX = useSharedValue(0);
    const topValue = useSharedValue(sequence?.value?.indexOf(id) * 50);
    const leftValue = useSharedValue(WINDOW_WIDTH * 0.05);

    const panGesture = Gesture.Pan()
        .onChange(event => {
            if (sequence?.value?.indexOf(id) == 3) {
                translationX.value = event.translationX;
            }
        })
        .onFinalize(event => {
            if (Math.abs(event.translationX) > WINDOW_WIDTH / 2) {
                translationX.value = withSpring(0);
                runOnJS(onCardChange)(changeSequence(sequence.value));
            } else {
                translationX.value = withSpring(0);
            }
        });

    const cardAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateX: translationX.value}],
            top: topValue.value,
            left: leftValue.value,
            zIndex: Math.round(topValue.value / 50),
        };
    });

    useAnimatedReaction(
        () => {
            return sequence.value?.indexOf(id);
        },
        (result, prev) => {
            if (result !== prev) {
                topValue.value = withTiming(result * 50);
            }
        },
        [],
    );

    return (
        <GestureDetector gesture={panGesture}>
            <Animated.View
                style={[
                    cardAnimatedStyle,
                    {
                        position: 'absolute',
                    },
                ]}>
                <ImageBackground
                    source={backgroundImage}
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
                        <Text style={styles.cardNumber}>
                            3234 8678 4234 7628
                        </Text>
                    </View>

                    <View style={styles.lowerSection}>
                        <View style={styles.firstBox}>
                            <Text style={styles.labelText}>
                                Card Holder name
                            </Text>
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
            </Animated.View>
        </GestureDetector>
    );
};

export default Card;
