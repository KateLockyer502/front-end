import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';

export default function Avatar({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Player 1, choose your avatar!</Text>
      <TouchableOpacity key="1">
        <Image source={require('../assets/alien_girl.png')}></Image>
      </TouchableOpacity>
      <Button
        title="Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
}); 