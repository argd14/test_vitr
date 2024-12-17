import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface CustomButtonProps {
  customText: string;
  color?: string;
  textColor?: string;
  onPress?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  customText,
  color,
  textColor,
  onPress,
}) => {
  const buttonStyles = StyleSheet.create({
    CustomButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 250,
      height: 50,
      backgroundColor: color,
      borderRadius: 4,
    },
    CustomButtonText: {
      color: textColor,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  return (
    <TouchableOpacity style={buttonStyles.CustomButton} onPress={onPress}>
      <Text style={buttonStyles.CustomButtonText}>{customText}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
