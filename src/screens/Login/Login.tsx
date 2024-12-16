import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
  Text,
} from 'react-native';
import {inputStyle} from './Login.styles';
import {COLORS} from '../../utils/colors';

const Login = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1, backgroundColor: COLORS.BLUE}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <Text>Inicio de sesión</Text>
        <TextInput
          style={inputStyle.customTextInput}
          // onChangeText={setIdentifier}
          placeholder="Correo Electronico"
          // placeholderTextColor={COLORS.WHITE}
          keyboardType="email-address"
          secureTextEntry={false}
          autoCapitalize="none"
        />
        <TextInput
          style={inputStyle.customTextInput}
          // onChangeText={setPassword}
          placeholder="Contraseña"
          // placeholderTextColor={COLORS.WHITE}
          keyboardType="default"
          secureTextEntry={true}
        />

        <View style={{gap: 10}}>
          <TouchableOpacity
          // onPress={() => handleLogin()}
          // text={'Ingresar'}
          // style={}
          // textColor={COLORS.WHITE}
          />
        </View>
        <View style={inputStyle.guestButton}>
          {/* <TouchableOpacity onPress={() => handleLoginAsGuest()}> */}
          <Text>Ingresa como Invitado</Text>
          {/* </TouchableOpacity> */}
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
