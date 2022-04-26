import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button,View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.header}>Cleaning Support</Text>
     
      
      <Button style={styles.button}
        title="Tengella"
        color="#4682B4"
        onPress={() => Alert.alert('Simple Button pressed')}
      />

<Button

        title="Nyhetsflöde"
        color="#4682B4"
        onPress={() => Alert.alert('Simple Button pressed')}
      />

<Button
        title="Mina sidor"
        color="#4682B4"
        onPress={() => Alert.alert('Simple Button pressed')}
      />

<Button
        title="Förbrukningsmaterial"
        color="#4682B4"
        onPress={() => Alert.alert('Simple Button pressed')}
      />

<Button
        title="Kalender"
        color="#4682B4"
        onPress={() => Alert.alert('Simple Button pressed')}
      />

<Button
        title="Personalhandbok"
        color="#4682B4"
        onPress={() => Alert.alert('Simple Button pressed')}
      />

<Button
        title="Blanketter vid olycka"
        color="#4682B4"
        onPress={() => Alert.alert('Simple Button pressed')}
      />

<Button
        title="Arbetsmiljöhandbok"
        color="#4682B4"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
     <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor:'#fff',
    
    justifyContent:'space-around',
    marginHorizontal:8,
    
    
    
  },

  header:{
    color:'#00BFFF',
    fontSize: 25,
  
  },

  title: {
    textAlign: 'center',
    
  },

  button:{
    
    
  }
});
