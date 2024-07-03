import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
// styles
import {styles} from './styles';
import GradientCircle from '@components/Circle';
// tabs
import CustomTabbar from './CustomTabbar';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Fingerprint from './Tabs/Fingerprint';
import Plane from './Tabs/Plane';
import Drop from './Tabs/Drop';
import Health from './Tabs/Health';
import History from './Tabs/History';
import Membership from './Tabs/Membership';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{swipeEnabled: false}}
            tabBar={props => <CustomTabbar {...props} />}>
            <Tab.Screen name="Fingerprint" component={Fingerprint} />
            <Tab.Screen name="Plane" component={Plane} />
            <Tab.Screen name="Drop" component={Drop} />
            <Tab.Screen name="Health" component={Health} />
            <Tab.Screen name="History" component={History} />
            <Tab.Screen name="Membership" component={Membership} />
        </Tab.Navigator>
    );
}

const Home = () => {
    return (
        <View style={styles.container}>
            <MyTabs />
        </View>
    );
};

export default Home;
