import {NavigationContext} from '@react-navigation/core';
import React from 'react';
import {Text, View} from 'react-native';
import ADIcons from 'react-native-vector-icons/AntDesign';
import CartItemHeader from './CartItemHeader';
interface HeaderProps {
  navigation: typeof NavigationContext;
  title: string;
}
const Header: React.FC<HeaderProps> = ({navigation, title}) => {
  return (
    <View
      style={{
        flex: 0.1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 5,
      }}>
      <ADIcons
        size={22}
        name={'arrowleft'}
        onPress={() => {
          navigation && navigation.goBack() ? navigation.goBack() : null;
        }}
      />
      <Text>{title ?? ''}</Text>
      <CartItemHeader navigation={navigation} />
    </View>
  );
};

export default Header;
