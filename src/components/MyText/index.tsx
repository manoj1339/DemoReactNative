import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MyText = ({
    children,
    fontWeight = 'regular',
    style = {},
    ...props
}: {
    children?: any;
    fontWeight?: string;
    style?: any;
}) => {
    let fontFamily = () => {
        if (fontWeight === 'regular') {
            return 'SpaceGrotesk-Regular';
        }
        if (fontWeight === 'bold') {
            return 'SpaceGrotesk-Bold';
        }
        if (fontWeight === 'medium') {
            return 'SpaceGrotesk-Medium';
        }
        if (fontWeight === 'semibold') {
            return 'SpaceGrotesk-SemiBold';
        }
        if (fontWeight === 'light') {
            return 'SpaceGrotesk-Light';
        }
        return 'SpaceGrotesk-Regular';
    };
    return (
        <Text style={[style, {fontFamily: fontFamily()}]} {...props}>
            {children}
        </Text>
    );
};

export default MyText;

const styles = StyleSheet.create({});
