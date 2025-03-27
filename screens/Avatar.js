import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';

export default function Avatar({ navigation }) {

  //implement avatar selection code here - using image ids

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Player 1 - select your avatar</Text>
      <View style={styles.avatarDisplay}>
    
        <TouchableOpacity id="1">
          <Image source={require('../assets/alien_girl.png')} style={styles.avatarImage}></Image>
        </TouchableOpacity>

        <TouchableOpacity id="2">
          <Image source={require('../assets/fox_boy.png')} style={styles.avatarImage}></Image>
        </TouchableOpacity>

        <TouchableOpacity id="3">
          <Image source={require('../assets/warrior.png')} style={styles.avatarImage}></Image>
        </TouchableOpacity>

        <TouchableOpacity id="4">
          <Image source={require('../assets/octopus_boy.png')} style={styles.avatarImage}></Image>
        </TouchableOpacity>

      </View>
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
    backgroundColor: '#2e2e2d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 150,
    color: '#fff',
  },
  avatarDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  avatarImage: {
    width: 280,
    height: 280,
    borderRadius: 200,
    backgroundColor: '#fff',
  },
}); 