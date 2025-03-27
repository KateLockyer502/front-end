import { StyleSheet, Text, View, Button } from 'react-native';

export default function Play({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Play HERE</Text>
       
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