import { StyleSheet, Text, View, Button } from 'react-native';

export default function HiScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi</Text>
      <Button
        title="Go back to Welcome"
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