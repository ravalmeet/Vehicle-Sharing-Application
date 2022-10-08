import React, { useState } from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import SelectList from 'react-native-dropdown-select-list'
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import Example from '../components/timePIcker/time_pick';
import CustomButton from '../components/customButton/custom_button';
import PassengerList from './passenger_list';
import LoadingScreen from './loading_screen';


const cities = [
  { key: 'G', value: 'Gandhinagar' },
  { key: 'A', value: 'Ahemdabad' },
  /* { key: 'V', value: 'Vadodara' }, */
];

const areas = {

  'G': [
    { key: '1', value: 'Section-9' },
    { key: '2', value: 'Section-10' },
    { key: '3', value: 'Section-11' },
    { key: '4', value: 'Section-12' },
    { key: '5', value: 'Section-13' },
    { key: '6', value: 'Section-14' },
    { key: '7', value: 'Section-15' },
    { key: '8', value: 'Section-16' },
    { key: '9', value: 'Section-17' },
  ],

  'A': [
    { key: '10', value: 'Sidi saiyad mosque' },
    { key: '11', value: 'Swaminaraya Mandir' },
    { key: '12', value: 'Kakariya' },
    { key: '13', value: 'Behram pul police station' },
    { key: '14', value: 'Airport Road' },
    { key: '15', value: 'Sadar bazar' },
    { key: '16', value: 'Apollo Hospital' },
    { key: '17', value: 'Shree BJP Gujarat office' },
  ],

  /*  'V': [
     { key: '7', value: 'Section4' },
     { key: '8', value: 'Seciton5' },
     { key: '9', value: 'Section6' },
   ], */

}

const HostScreen = ({ navigation }) => {


  const onConfirmPressed = () => {
    navigation.navigate(LoadingScreen)
  }





  const { height } = useWindowDimensions();

  const [city, setCity] = useState('S');
  const [area, setArea] = useState(true);

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <View style={[styles.header, { height: height * 0.07 }]}><Text style={[{ fontSize: 20, }]}>Select Area</Text></View>
        <Text style={{ marginHorizontal: 30, marginTop: 30, }}>Select City</Text>
        <SelectList
          boxStyles={{ marginTop: 10, marginHorizontal: 30 }}
          dropdownStyles={{ marginHorizontal: 30 }}
          setSelected={setCity}
          data={cities}
          placeholder={"Select"}
          defaultOption={{ key: 'G', value: 'Gandhinagar' }}
        />
        <Text style={{ marginHorizontal: 30, marginTop: 30 }}>Select City</Text>
        <SelectList
          boxStyles={{ marginTop: 10, marginHorizontal: 30 }}
          dropdownStyles={{ marginHorizontal: 30 }}
          setSelected={setArea}
          data={areas[city]}
          placeholder={"Select"}

        />
        <Example />
        <View style={styles.btn}>
          <CustomButton text={'Confirm'} onPress={onConfirmPressed} />
        </View>
      </View>
    </SafeAreaView>

  );
}
export default HostScreen;

const styles = StyleSheet.create({


  btn: {
    alignItems: 'center',

  },

  header: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#E5E4E2',
    flexDirection: 'row',
    justifyContent: 'center'
  },
});

