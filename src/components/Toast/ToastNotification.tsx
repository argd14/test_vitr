import React from 'react';
import {StyleProp, Text, TextStyle, ViewStyle} from 'react-native';
import Animated, {
  AnimatedStyle,
  FadeInUp,
  FadeOutUp,
} from 'react-native-reanimated';

const ToastNotification = ({message, color}: any) => {
  const toastStyles = {
    Toast: {
      backgroundColor: color,
      borderRadius: 12,
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      shadowColor: '#003049',
      shadowOpacity: 0.4,
      shadowRadius: 2,
      shadowOffset: {width: 0, height: 1},
      elevation: 5,
    },
    ToastMessage: {
      color: '#f1faee',
      fontSize: 16,
      fontWeight: 'bold',
    },
  };
  return (
    <Animated.View
      entering={FadeInUp}
      exiting={FadeOutUp}
      style={
        toastStyles.Toast as StyleProp<AnimatedStyle<StyleProp<ViewStyle>>>
      }>
      <Text
        numberOfLines={3}
        textBreakStrategy="simple"
        style={toastStyles.ToastMessage as StyleProp<TextStyle>}>
        {message}
      </Text>
    </Animated.View>
  );
};

export default ToastNotification;
