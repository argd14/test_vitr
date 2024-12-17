import React, {useEffect, useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  Text,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {inputStyle, viewStyles} from './Login.styles';
import {COLORS} from '../../utils/colors';
import CustomButton from '../../components/Buttons/CustomButton';
import CustomImage from '../../components/Images/CustomImage';
import {Images} from '../../utils/constants';
import {useLogin} from '../../hooks/useLogin';
import ToastNotification from '../../components/Toast/ToastNotification';

const Login = () => {
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {
    loading,
    message,
    setMessage,
    setNotifications,
    notifications,
    loginRequest,
  } = useLogin();

  const validateFields = () => {
    if (username.trim() === '' || password.trim() === '') {
      Alert.alert('Please enter both username and password.');
      return true;
    }
    return false;
  };

  const handleLogin = async () => {
    if (validateFields()) {
      return;
    }
    const response = await loginRequest({username, password});
    if (response !== undefined && response !== null) {
      setNotifications(true);
    } else {
      setMessage('Error');
      setNotifications(true);
    }
  };

  useEffect(() => {
    if (notifications === true) {
      setTimeout(() => {
        setNotifications(false);
      }, 2000);
    }
  }, [setNotifications, notifications]);
  return (
    <>
      <View style={viewStyles.toastView}>
        {notifications && (
          <ToastNotification message={message} color={COLORS.GREEN} />
        )}
      </View>
      <KeyboardAvoidingView
        style={viewStyles.keycustomstyles}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <CustomImage image={Images.LOGO} />
        <Text>Inicio de sesión</Text>
        <TextInput
          style={inputStyle.customTextInput}
          onChangeText={setUserName}
          placeholder="Correo Electronico"
          placeholderTextColor={COLORS.GREEN}
          keyboardType="email-address"
          secureTextEntry={false}
          autoCapitalize="none"
        />
        <TextInput
          style={inputStyle.customTextInput}
          onChangeText={setPassword}
          placeholder="Contraseña"
          placeholderTextColor={COLORS.GREEN}
          keyboardType="visible-password"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.GREEN} />
        ) : (
          <CustomButton
            onPress={() => handleLogin()}
            customText="Ingresar"
            color={COLORS.BLACK}
            textColor={COLORS.WHITE}
          />
        )}
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
