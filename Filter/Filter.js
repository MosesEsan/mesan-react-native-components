import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableHighlight, View} from 'react-native';
import {Icon} from 'react-native-elements'

import styles from "./styles"

export function Filter({filters, onFilter, currentFilter, border}) {
    let all = {name: "All", value: null};
    const [options, setOptions] = useState([]);

    useEffect(() => setOptions([...filters]), [filters]);

    return (
        <View style={[styles.container, border && styles.border]}>
            <ScrollView style={[styles.wrapper]} horizontal={true} showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.innerContainer}>
                {
                    options.map((option, index) => {
                        let active = (currentFilter && currentFilter.name === option.name)
                        return (
                            <TouchableHighlight  underlayColor="rgba(0, 0, 0, 0)"  onPress={() => onFilter(option)} key={"filter_" + index} style={styles.optionButton}>
                                <View style={[styles.option, active && styles.selected]} key={'filters_' + index}>

                                    {option.hasOwnProperty('icon') &&
                                    <Icon
                                        type={option.iconType || "material"}
                                        name={option.icon}
                                        color={"white"}
                                        containerStyle={{marginRight:6}}
                                        iconStyle={[styles.icon, {height: option.iconSize || 16 }]}
                                        size={option.iconSize || 16}
                                    />
                                    }

                                    <Text style={[styles.optionText, active && styles.selectedText]}>{option.name}</Text>
                                </View>
                            </TouchableHighlight>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}

Filter.defaultProps = {
    border: true,
    onRetry:null
};

export default Filter;

