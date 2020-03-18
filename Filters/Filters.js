import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import styles from "./styles"

export function Filters({filters, onFilter, currentFilter, border}) {
    let all = {name: "All", value: null};
    const [options, setOptions] = useState([all]);

    useEffect(() => setOptions([all, ...filters]), [filters]);

    const onPress = (option) => {
        if (option.name === "All") option = null ;
        onFilter(option)
    };

    return (
        <View style={[styles.container, border && styles.border]}>
            <ScrollView style={[styles.wrapper]} horizontal={true} showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.innerContainer}>
                {
                    options.map((option, index) => {
                        let active = (currentFilter && currentFilter.name === option.name) || (!currentFilter && index === 0)
                        return (
                            <TouchableOpacity onPress={() => onPress(option)} key={"filter_" + index} style={styles.optionButton}>
                                <View style={[styles.option, active && styles.selected]} key={'filters_' + index}>
                                    <Text style={[styles.optionText, active && styles.selectedText]}>{option.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}

Filters.defaultProps = {
    border: true,
    onRetry:null
};

export default Filters;

