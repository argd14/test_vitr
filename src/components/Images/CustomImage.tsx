import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Images} from '../../utils/constants';

interface CustomImageProps {
  image?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({image}) => {
  const imageStyles = StyleSheet.create({
    CustomImage: {
      width: 150,
      height: 150,
    },
  });
  return (
    <Image
      style={imageStyles.CustomImage}
      resizeMode="contain"
      source={image ?? Images.EMPTY_STATE}
    />
  );
};

export default CustomImage;
