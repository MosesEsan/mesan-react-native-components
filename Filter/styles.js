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
        paddingLeft: 8,
        paddingRight: 4
    },

    option: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        backgroundColor: '#E6E7F5',
        flexDirection: "row",
        borderRadius: 50

    },

    selected: {
        backgroundColor: '#2C1F8D'
    },

    selectedText: {
        color: '#FFFFFF'
    },

    icon:{

        color: '#6962A1'
    },

    optionText: {
        color: '#6962A1',
        fontFamily: font,
        fontWeight: "500",
        fontSize: 14
    }
});
export default styles;