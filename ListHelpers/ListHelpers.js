import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator, TouchableHighlight} from 'react-native';
import {Icon} from 'react-native-elements';

//PLACEHOLDER COMPONENT
export const Placeholder = ({isFetching, error, onRetry}) => {
    if (isFetching) return <Loading/>;
    else if (error) return <Error error={error} onRetry={onRetry}/>;
    else return null;
};

Placeholder.defaultProps = {
    isFetching:false,
    error: "",
    onRetry:null
};

//Loading COMPONENT
export const Loading = () => {
    return (
        <View style={{flex:1, justifyContent:"center", marginTop:-30}}>
            <ActivityIndicator style={{paddingVertical: 8}} size={'large'}/>
        </View>
    )
};

//ERROR COMPONENT
export const Error = ({error, onRetry}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.errorMessage}>
                {`${error.message}`}
            </Text>
            {onRetry &&  <Text style={styles.retryText} onPress={onRetry}>Tap to retry</Text>}
        </View>
    )
};

Error.defaultProps = {
    error: "",
    onRetry:null
};


//EMPTY COMPONENT
export const Empty = ({message}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.errorMessage}>
                {`${message}`}
            </Text>
        </View>
    )
};

Empty.defaultProps = {
    message: "No Data to Display"
};


//HEADER COMPONENT
export const Header = ({title, ctaText,  onPress, ctaStyle, containerStyle}) => {
    return (
        <View style={[styles.header, containerStyle]}>
            <Text style={styles.headerText}>
                {title}
            </Text>
            {onPress && <Text style={[styles.cta, ctaStyle]} onPress={onPress}>{ctaText || "Cta Text"}</Text>}
        </View>
    )
};

Error.defaultProps = {
    title: "",
    ctaText: "",
    onPress:null,
    ctaStyle: {},
    containerStyle: {},
};

//FOOTER COMPONENT
export const Footer = () => {
    return (
        <View style={styles.footerStyle}>
            <ActivityIndicator/>
        </View>
    )
};

//NavIcon COMPONENT
export const NavIcon = ({type, name, size, color, onPress, style}) => {
    return (
        <Icon type={type} name={name} size={size} color={color} containerStyle={[styles.navWrapper, style]} onPress={onPress} underlayColor="rgba(0, 0, 0, 0)"/>
    )
};

NavIcon.defaultProps = {
    size: 22, color:"#FFFFFF",
    style: {}
};

const styles = StyleSheet.create({
    container: {
        flex:1, justifyContent:"center", alignItems:"center"
    },

    errorMessage:{
        fontSize: 16
    },

    retryText:{
        color: "blue", fontSize: 16, padding: 8
    },

    footerStyle: {
        position: 'relative',
        paddingVertical: 30
    },

    navWrapper: {
        height: 44,
        width: 44,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 8


        // height: 40, width: 40, borderRadius: 40/2,
        // marginHorizontal:4, backgroundColor:"#e4e6eb"
        
    },

    header: {
        flex: 1,
        paddingTop: 16,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 8,
        backgroundColor: "#FFF",
        flexDirection: "row",
    },

    headerText: {
        color: "#4D515D",
        backgroundColor: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1
    },

    cta: {
        color: "#D1644F",
        fontSize: 14,
        fontWeight: '500'
    }
});