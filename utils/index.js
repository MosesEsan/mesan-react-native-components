import React  from 'react';
import {Alert} from "react-native";

import useActionCreator from "./useActionCreator"
import crudReducer from "./crudReducer"

function showAlert(type, message = "", title = "Action Completed Successfully", onPress=null){
    let options = [{text: 'OK', onPress}];

    if (type === "error") title = "Something Went Wrong!";

    Alert.alert(title, message, options, {cancelable: false});
}

const showErrorAlert = (message = "") => showAlert("error", message);
const showSuccessAlert = (message = "", title, onPress) => showAlert(null, message, title, onPress);

export {useActionCreator, crudReducer, showSuccessAlert, showErrorAlert }
