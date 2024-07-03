import {WINDOW_WIDTH} from '@utils/constants';
import {StyleSheet} from 'react-native';

const CARD_BORDER_RADIUS = 16;

export const styles = StyleSheet.create({
    container: {
        width: WINDOW_WIDTH * 0.9,
        borderRadius: CARD_BORDER_RADIUS,
        overflow: 'hidden',
        maxWidth: 400,
    },
    headerText: {
        fontSize: 18,
        fontFamily: 'SpaceGrotesk',
        fontWeight: 'bold',
        color: '#fff',
    },
    upperSection: {
        width: WINDOW_WIDTH * 0.9,
        padding: 16,
    },
    chipContactlessContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 16,
    },
    smallImage: {
        width: 50,
        height: 50,
    },
    cardNumber: {
        fontSize: 24,
        color: '#fff',
    },
    lowerSection: {
        width: WINDOW_WIDTH * 0.9,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    labelText: {
        fontSize: 10,
        color: '#fff',
        marginBottom: 7,
    },
    labelValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    firstBox: {
        flex: 3,
    },
    secondBox: {
        flex: 2,
    },
    thirdBox: {
        flex: 1,
    },
});
