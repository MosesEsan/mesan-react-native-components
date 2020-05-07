import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View, TouchableHighlight, Modal} from 'react-native';
import {Icon} from 'react-native-elements';

//PLACEHOLDER COMPONENT
export const Placeholder = ({isFetching, error, onRetry}) => {
    if (isFetching) return <Loading/>;
    else if (error) return <Error error={error} onRetry={onRetry}/>;
    else return null;
};

Placeholder.defaultProps = {
    isFetching: false,
    error: "",
    onRetry: null
};

//Loading COMPONENT
export const Loading = () => {
    return (
        <View style={{flex: 1, justifyContent: "center", marginTop: -30}}>
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
            {onRetry && <Text style={styles.retryText} onPress={onRetry}>Tap to retry</Text>}
        </View>
    )
};

Error.defaultProps = {
    error: "",
    onRetry: null
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
export const Header = ({title, ctaText, onPress, ctaStyle, containerStyle}) => {
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
    onPress: null,
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
export const NavIcon = ({type, name, size, color, onPress, style, underlayColor, badge}) => {

    if (badge && badge > 0) {
        return (
            <TouchableHighlight style={[styles.navWrapper, style, { }]} onPress={onPress} underlayColor={underlayColor}>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{badge}</Text>
                </View>
            </TouchableHighlight>
        )
    }
    return (
        <Icon type={type} name={name} size={size} color={color}
              containerStyle={[styles.navWrapper, style]}
              iconStyle={styles.icon}
              onPress={onPress}
              underlayColor={underlayColor}/>
    )
};

NavIcon.defaultProps = {
    badge: 0,
    size: 22,
    color: "#FFFFFF",
    underlayColor: 'rgba(0, 0, 0, 0)',
    style: {}
};

export const OverlayContainer = ({children, modalVisible, message}) => {
    return (
        <View style={{flex: 1}}>
            <Modal animationType="fade" transparent={true}
                   visible={modalVisible}>
                <View style={[styles.overlayContainer]}>
                    <View style={[styles.overlayInnerContainer]}>
                        <ActivityIndicator
                            style={[styles.indicator]}
                            size={'large'}
                            color={'white'}/>

                        <Text style={[styles.message, {color: 'white', fontSize: 24}]}>
                            {message}
                        </Text>
                    </View>
                </View>
            </Modal>
            {children}
        </View>
    )
};

OverlayContainer.defaultProps = {
    modalVisible: false,
    message: ""
};

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: "center", alignItems: "center"
    },

    errorMessage: {
        fontSize: 16,
        textAlign:"center"
    },

    retryText: {
        color: "blue", fontSize: 16, padding: 8
    },

    footerStyle: {
        position: 'relative',
        paddingVertical: 30
    },

    navWrapper: {
        height: 44,
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: 'transparent'
    },

    icon: {
        marginHorizontal: 16,
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
    },

    badge: {
        backgroundColor: "#6962A1",
        height: 24,
        width: 24,
        borderRadius: 24 / 2,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 4,
        marginTop:-5
    },

    badgeText: {
        fontSize: 12, color: "white",
        fontWeight: '400',
    },

    overlayContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },

    overlayInnerContainer: {
        borderRadius: 10,
        alignItems: 'center',
        padding: 20
    },

    indicator: {
        marginBottom: 15
    },

    message: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '400'
    }
});