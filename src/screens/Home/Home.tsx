import React from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../../components/Buttons/CustomButton';
import {useLogin} from '../../hooks/useLogin';

const Home = () => {
  const {logout} = useLogin();
  return (
    <View>
      <CustomButton onPress={() => logout()} customText={'Logout'} />
      <Text>Home</Text>
    </View>
  );
};

export default Home;
