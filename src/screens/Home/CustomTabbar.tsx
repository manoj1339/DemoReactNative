import {
    Animated,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
// icons
import {IconProps} from 'react-native-vector-icons/Icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// animation
// import Animated, {CurvedTransition} from 'react-native-reanimated';
import GradientCircle from '@components/Circle';

const ICONS = [
    {
        id: '1',
        name: 'fingerprint',
        type: 'MaterialIcons',
        size: 24,
    },
    {
        id: '2',
        name: 'airplane-takeoff',
        type: 'MaterialCommunityIcons',
        size: 24,
    },
    {
        id: '3',
        name: 'water-drop',
        type: 'MaterialIcons',
        size: 24,
    },
    {
        id: '4',
        name: 'health-and-safety',
        type: 'MaterialIcons',
        size: 24,
    },
    {
        id: '5',
        name: 'history-edu',
        type: 'MaterialIcons',
        size: 24,
    },
    {
        id: '6',
        name: 'card-membership',
        type: 'MaterialIcons',
        size: 24,
    },
];

const Icon = ({type, ...props}: Readonly<IconProps> & {type: string}) => {
    if (type == 'MaterialCommunityIcons')
        return <MaterialCommunityIcons {...props} />;
    if (type == 'MaterialIcons') return <MaterialIcons {...props} />;
};

export default function CustomTabbar({
    state,
    descriptors,
    navigation,
    position,
}: {
    state: any;
    descriptors: any;
    navigation: any;
    position: any;
}) {
    return (
        <SafeAreaView>
            <View style={styles.topView}>
                <View style={styles.headerRow}>
                    <GradientCircle />
                    <View style={styles.tipsView}>
                        <Icon
                            type="MaterialIcons"
                            name="lightbulb-outline"
                            color={'#FAB60F'}
                            size={20}
                        />
                        <Text style={styles.tipsText}>Tips</Text>
                    </View>
                </View>

                <Text style={styles.headingText}>All your credit cards</Text>
                <Text style={styles.subHeadingText}>
                    Find all your credit cards here
                </Text>
            </View>
            <View style={styles.container}>
                {state.routes.map((route: any, index: number) => {
                    const {options} = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                            ? options.title
                            : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const inputRange = state.routes.map(
                        (_: any, i: number) => i,
                    );
                    const opacity = position.interpolate({
                        inputRange,
                        outputRange: inputRange.map((i: number) =>
                            i === index ? 1 : 0.5,
                        ),
                    });

                    const scale = position.interpolate({
                        inputRange,
                        outputRange: inputRange.map((i: number) =>
                            i === index ? 1.3 : 1,
                        ),
                    });

                    return (
                        <TouchableOpacity
                            key={route.key}
                            accessibilityRole="button"
                            accessibilityState={
                                isFocused ? {selected: true} : {}
                            }
                            accessibilityLabel={
                                options.tabBarAccessibilityLabel
                            }
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{flex: 1}}>
                            <Animated.View
                                style={[
                                    styles.icon,
                                    {
                                        transform: [{scale: scale}],
                                        opacity: opacity,
                                    },
                                ]}>
                                <Icon {...ICONS[index]} color={'#fff'} />
                            </Animated.View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#222222',
        height: 100,
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    icon: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topView: {
        backgroundColor: '#000',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 40,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    tipsView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        padding: 10,
        backgroundColor: '#252525',
        borderRadius: 5,
    },
    tipsText: {
        color: '#fff',
    },
    headingText: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
        marginVertical: 10,
    },
    subHeadingText: {
        color: '#fff',
    },
});
