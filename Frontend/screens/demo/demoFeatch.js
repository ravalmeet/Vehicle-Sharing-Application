import { View, Text, useState, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const DemoApi = () => {


  const PassApi = require("../../jsonFIles/passengerList.json")

  const [isLoading, setLoading] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(PassApi).then((response) => response.json()).then((json) => setData(json.data))
      .catch((error) => alert(error))

  });

  return (
    <SafeAreaView>
      {isLoading ? (<ActivityIndicator />) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => {
            <Text>{item.name}</Text>;
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default DemoApi