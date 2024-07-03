import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
    Canvas,
    Circle,
    Group,
    LinearGradient,
    vec,
} from '@shopify/react-native-skia';

const CIRCLE_WIDTH = 50;

const GradientCircle = () => {
    return (
        <Canvas style={styles.container}>
            <Group>
                <LinearGradient
                    start={vec(0, 65)}
                    end={vec(65, 0)}
                    colors={['#3603FF', '#FB5CD8', '#FAFF00']}
                    positions={[0, 0, 1]}
                />
                <Circle
                    r={CIRCLE_WIDTH / 2}
                    cx={CIRCLE_WIDTH / 2}
                    cy={CIRCLE_WIDTH / 2}
                />
            </Group>
        </Canvas>
    );
};

export default GradientCircle;

const styles = StyleSheet.create({
    container: {
        width: CIRCLE_WIDTH,
        height: CIRCLE_WIDTH,
    },
});
