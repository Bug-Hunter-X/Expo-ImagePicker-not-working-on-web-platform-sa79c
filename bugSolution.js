import React, { useState } from 'react';
import { Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImagePickerComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    let result;
    if (Platform.OS === 'web') {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
      };
      input.click();
    } else {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });

      if (!result.cancelled) {
        setSelectedImage(result.assets[0].uri);
      }
    }
  };

  return (
    <>
      <button onPress={pickImage}>Pick Image</button>
      {selectedImage && <img src={selectedImage} alt="Selected Image" />}
    </>
  );
};

export default ImagePickerComponent;
