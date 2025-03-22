import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';

export default function Home({ navigation }) {
  return (
    
    <View style={styles.container}>
      <Video
        source={require('../assets/geo_bg.mp4')} //set background video
        rate={1.0}
        isMuted={true} 
        resizeMode="cover" 
        shouldPlay
        isLooping
        style={styles.backgroundVideo} 
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>FIDUCIAL FRONTIERS</Text> 
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Avatar')} //navigate to choose your avatar
        >
          <Text style={styles.buttonText}>PLAY</Text> 
        </TouchableOpacity>
      </View>
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
  backgroundVideo: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    position: 'absolute',
    zIndex: 1, //overlay on top of background video
    alignItems: 'center',
  },
  title: {
    fontSize: 100,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
    textShadowColor: '#ccc',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  button: {
    backgroundColor: '#bd0921', 
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '600',
  },
}); 