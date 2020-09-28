import React from 'react';
import {Animated, Dimensions, Platform, SafeAreaView, ScrollView, StatusBar, View, Text} from 'react-native';

//ANIMATION VARIABLES
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export const HEADER_HEIGHT = Platform.OS === 'ios' ? 44 : 64;

// const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
// export const STATUS_BAR_HEIGHT = Platform.select({ios: IS_IPHONE_X ? 44 : 20, android: 24});
// export const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;

export default function Container(props) {
    //==================================================================================================

    const searchAnimated = new Animated.Value(0);
    const searchScrollY = new Animated.Value(0);
    const navAnimated = new Animated.Value(0);
    const opacityValue = new Animated.Value(1);

    const {clampHeight, style, contentContainerStyle, renderFixedHeader} = props;
    const {showHiddenView, renderHiddenView, hiddenViewStyle} = props;
    const {headerTitle, showHeader, fixedHeader, renderHeader} = props;

    const collapseInterpolate = navAnimated.interpolate({
        inputRange: [0, 250],
        outputRange: [0, -clampHeight],
        extrapolate: "clamp"
    });


    const opacityInterpolate = navAnimated.interpolate({
        inputRange: [0, 250],
        outputRange: [1, 0],
        extrapolate: "clamp"
    });

    const animStyle = {marginTop: collapseInterpolate, opacity: opacityInterpolate};
    let topContStyle = {opacity: opacityValue, marginTop: 0};
    let styleAnimation = getAnimation(searchScrollY, searchAnimated, clampHeight);

    //==================================================================================================
    const renderContainerHeader = () => {
        if (showHeader){
            if (renderHeader) {
                return (
                    <Animated.View style={[{height: clampHeight}, !fixedHeader && animStyle, {overflow: "hidden"}]}>
                        {renderHeader()}
                    </Animated.View>
                )
            }else {
                return (
                    <Animated.View style={[{height: clampHeight}, !fixedHeader && animStyle, {overflow: "hidden"}]}>
                        <View style={{backgroundColor: props.headerBackgroundColor, height:HEADER_HEIGHT, alignItems:"center", justifyContent:"center"}}>
                            <Text>{headerTitle}</Text>
                        </View>
                    </Animated.View>
                )
            }
        }

        return null;
    };

    //==================================================================================================
    return (
        <>
            <SafeAreaView style={{flex: 0, backgroundColor: props.headerBackgroundColor}}/>
            <SafeAreaView style={[{flex: 1}, style]}>
                <StatusBar barStyle="light-content" backgroundColor='#364fd4'/>
                <Animated.View style={[topContStyle]}>
                    {renderContainerHeader()}
                    {/*{renderFixedHeader()}*/}
                </Animated.View>
                <ScrollView style={[contentContainerStyle]}
                            scrollEventThrottle={16}
                            onScroll={Animated.event([{nativeEvent: {contentOffset: {y: navAnimated}}}])}>
                    {props.children}
                </ScrollView>
                {
                    (showHiddenView) &&
                    <Animated.View style={[searchViewContainer, styleAnimation, hiddenViewStyle]}>
                        {renderHiddenView()}
                    </Animated.View>
                }
            </SafeAreaView>
        </>
    );
};

Container.defaultProps = {
    clampHeight: HEADER_HEIGHT,
    style: {},
    contentContainerStyle: {},

    showHiddenView: false,
    renderHiddenView: null,
    hiddenViewStyle: {},

    headerTitle: '',
    showHeader: true,
    fixedHeader: false,
    renderHeader: null,
    headerBackgroundColor: '#ffffff',

    renderFixedHeader: null
};

export const getAnimation = (searchScrollY) => {
    return {
        opacity: searchScrollY.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        }),
        transform: [{
            translateY: searchScrollY.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0]  // 0 : 150, 0.5 : 75, 1 : 0
            }),
        }],
    }
};

const searchViewContainer = {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
};