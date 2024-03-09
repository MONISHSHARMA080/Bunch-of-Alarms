import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, NativeModule, NativeModules } from 'react-native';


// const {CalendarModule} = NativeModules;

export default function App() {
  const {CalendarModule} = NativeModules;

  const [result, setResult] = useState("");

  const sayMyNameAsync = async () => {
    try {
      const nameResult = await CalendarModule.sayMyName("MeetingConference Room");
      setResult(nameResult);
      console.log(nameResult);
    } catch (error) {
      console.error("Error calling sayMyName:", error);
    }
  };

  useEffect(() => {
    sayMyNameAsync();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{color:"#FFFFFF",fontSize:19}}
      onPress={sayMyNameAsync}
      >App.js {result} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});