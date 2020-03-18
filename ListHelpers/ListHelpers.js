import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

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

//FOOTER COMPONENT
export const Footer = () => {
    return (
        <View style={styles.footerStyle}>
            <ActivityIndicator/>
        </View>
    )
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
});