import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,} from 'react-native';
import ImageViewer from './components/imageViewer';
import Button from './components/button';
import * as ImagePicker from 'expo=image-picker';
import { useState } from 'react';

const PlaceholderImage = require('./assets/paisagem.jpg')

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImagesAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      alert('Você não selecionou uma imagem.');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Escolha uma foto" onPress={pickImagesAsync}/>
        <Button label="Use essa foto"/>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
 footerContainer: {
  flex: 1/3,
  alignItems: 'center',
 },
});