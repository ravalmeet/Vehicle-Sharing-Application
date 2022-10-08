import React, { useState } from "react";
import { Button, View, StyleSheet, TextInput, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CustomButton from '../../components/customButton/custom_button'
import CustomInput from '../../components/customInput/customInput'
import TimeSelect from "./timeSelect";



const Example = () => {
  const [time, setTime] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (time) => {
    setTime(time);
    hideDatePicker();
  };

  const getDate = () => {
    let tempDate = time.toString().split(' ');
    return time !== ''
      ? ` ${tempDate[4]}`
      : '';
  };


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={getDate()}
        placeholder="Date..."
      />
      <Button onPress={showDatePicker} title="Set Time" />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}

      />

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 5,
    padding: 10,
  },
});

export default Example