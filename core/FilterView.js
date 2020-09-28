import React, {useEffect, useState} from 'react';
import {
    Modal,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';

import moment from "moment";
import {Icon} from 'react-native-elements'

const CUSTOM = "Custom Date";

export default function FilterView(props) {
    const {modal, visible} = props;

    if (modal) {
        return (
            <Modal animationType="slide" transparent={false} visible={visible}>
                <Component {...props}/>
            </Modal>
        )
    }

    return <Component {...props}/>
}

FilterView.defaultProps = {
    modal: true,
    visible: false,
    onCancel:null,
    onDone:null
};

function Header(props) {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={props.onCancel} style={styles.headerButton}>
                <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onDone} style={[styles.headerButton]}>
                <Text style={styles.doneButton}>Done</Text>
            </TouchableOpacity>
        </View>
    );
}

function Component(props) {
    //1 - DECLARE VARIABLES
    const [filters, setFilters] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState('startDate');

    //==================================================================================================

    //2 - MAIN CODE BEGINS HERE
    useEffect(() => {
        const [...clone] = props.filters;

        clone.map((filter, idx) => clone['selected'] = filter.selected || null);

        setFilters(clone)
    }, []);

    //==================================================================================================

    function onDone() {
        const selected = [];

        filters.map((filter, idx) => {
            let selected_ = filter['selected'];
            if (selected_) {
                if (selected_.name === CUSTOM) selected_ = {...selected_, start: startDate, end: endDate};

                selected.push(selected_);
            }
        });

        props.onDone({filters, selected})
    }

    const setDates = dates => {
        setStartDate(moment(dates.startDate).format('YYYY-MM-DD HH:mm'));

        if (dates.endDate) setEndDate(moment(dates.endDate).format('YYYY-MM-DD HH:mm'));
        setFocusedInput(dates.focusedInput);
    };

    const isDateBlocked = (date) => date.isBefore(moment(), 'day');

    const onPress = (filterIndex, option) => {
        const [...clone] = filters;
        const selected_ = filters[filterIndex]['selected'];

        const isCurrent = (selected_ && selected_.name === option.name);
        clone[filterIndex]['selected'] = isCurrent ? null : option;

        setFilters(clone)
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header {...props} onDone={onDone}/>
            <ScrollView style={{backgroundColor: "#eeeeee"}}>
                {
                    filters.map((filter, filterIndex) => {
                        return (
                            <View style={styles.filterContainer} key={`${filter.title}_${filterIndex}`}>
                                <Text style={styles.filterHeader}>{filter.title}</Text>
                                <View>
                                    {
                                        filter.options.map((option, idx) => {
                                            const selected_ = filters[filterIndex]['selected'];
                                            return (
                                                <TouchableHighlight key={`${option.name}_${filterIndex}`}
                                                                    style={{marginHorizontal: 5}}
                                                                    onPress={() => onPress(filterIndex, option)}
                                                                    underlayColor={"rgba(0, 0, 0, 0)"}>
                                                    <View style={styles.option}>
                                                        <Text style={{flex: 1, fontSize: 14}}>{`${option.name}`}</Text>
                                                        {
                                                            (selected_ && selected_['name'] === option.name) &&
                                                            <Icon
                                                                type={"ionicon"}
                                                                name={"md-checkmark"}
                                                                color={"#2089dc"}
                                                                iconStyle={[styles.icon, {height: 21}]}
                                                                size={21}
                                                            />
                                                        }
                                                    </View>
                                                </TouchableHighlight>
                                            )
                                        })
                                    }
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        flex: 1
    },

    headerContainer: {
        height: 45,
        borderBottomWidth: 1,
        borderColor: "#ccc",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff"
    },

    headerButton: {
        height: "100%",
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center"
    },

    cancelButton: {
        fontSize: 18,
        color: "#666",
        fontWeight: "400"
    },

    doneButton: {
        fontSize: 18,
        color: "#006BFF",
        fontWeight: "500"
    },

    ///FILTER

    filterContainer: {
        marginHorizontal: 8,
        marginTop: 8,
        backgroundColor: "#fff",
        paddingHorizontal: 8

    },

    filterHeader: {
        color: "#43484d",
        fontSize: 14,
        marginHorizontal: 5,
        marginVertical: 8,
        marginBottom: 12,
        fontWeight: "bold"
    },

    option: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 16,
        height: 50
    }
});