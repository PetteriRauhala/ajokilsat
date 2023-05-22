//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import {View, Text, Image, ScrollView, TextInput, StatusBar} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <StatusBar/>
      <Text> Jotahi tuherrusta</Text>
      <View>
        <Text> Lissää jotahi tuherrusta</Text>
        <Image
          source={{
            uri: 'https://im.indiatimes.in/content/2023/Apr/Untitled-design---2023-04-13T132449024_6437b559b9d11.png?w=1200&h=900&cc=1',
          }}
          style={{width: 400, height: 400}}
        />
      </View>
      <TextInput
        style={{
          height: 50,
          borderColor: 'green',
          borderWidth: 2,
        }}
        defaultValue=" Tuherrappa tännekki jotahi "
      />
    </ScrollView>
  );
};

export default App;
// export default function App() {
//  return (
//    <View style={styles.container}>
//      <Text>perkele</Text>
//      <StatusBar style="auto" />
//    </View>
//  );
//}

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});
 