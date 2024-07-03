/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
// components
import Card from '@components/Card';

function App(): React.JSX.Element {
    return (
        <SafeAreaView style={{alignItems: 'center'}}>
            <Card />
        </SafeAreaView>
    );
}

export default App;
