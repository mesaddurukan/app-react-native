import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <Text style={styles.text}>Ben Mahmud Esad Durukan</Text>
      <Text style={styles.text}>Yönetim Bilişim Sistemleri</Text>
      <Text style={styles.text}>2020507040</Text>
      <Text style={styles.text}>Metin Özşahin</Text>
      <Text style={[styles.text, styles.course]}>Mobil Programlama</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Arka plan rengi
  },
  text: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10, // Metinler arası boşluk
  },
  course: {
    fontWeight: 'bold', // Kalın yazı
    color: 'blue', // Metin rengi
  },
});

export default App;
