import {StyleSheet} from 'react-native';


export let font = Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto';
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },

    border:{
        borderBottomWidth: 1,
        borderColor: "#A3A2A4"

    },

    wrapper: {
        paddingVertical: 8 * 1.2,
        flexDirection: "row"
    },

    innerContainer: {
        justifyContent: "center",
        alignItems: "center",
    },

    optionButton:{
        paddingHorizontal: 8
    },

    option: {
        // height: 38,
        width: 100,
        // borderWidth: 1, borderColor: '#F1F0F1',
        paddingHorizontal: 16,
        paddingVertical: 10,
        // borderRadius: 10,
        backgroundColor: '#E6E7F5',
        // marginRight: 8,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 50

    },

    selected: {
        backgroundColor: '#2C1F8D'
    },

    selectedText: {
        color: '#FFFFFF'
    },

    optionText: {
        color: '#6962A1',
        fontFamily: font,
        fontWeight: "500",
        fontSize: 13,
    }
});
export default styles;