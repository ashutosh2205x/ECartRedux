import {NavigationContext} from '@react-navigation/core';
import React from 'react';
import {Text, View} from 'react-native';
import ADIcons from 'react-native-vector-icons/AntDesign';
import CartItemHeader from './CartItemHeader';
interface HeaderProps {
  navigation: typeof NavigationContext;
  title: string;
  backNav: boolean;
  showCart: boolean | null;
}
const Header: React.FC<HeaderProps> = ({
  navigation,
  title,
  backNav,
  showCart,
}) => {
  return (
    <View
      style={{
        flex: 0.1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 5,
      }}>
      <View style={{flex: 0.1}}>
        {backNav && (
          <ADIcons
            size={22}
            name={'arrowleft'}
            onPress={() => {
              navigation && navigation.goBack() ? navigation.goBack() : null;
            }}
          />
        )}
      </View>

      <View style={{flex: 0.6, alignItems: 'center'}}>
        <Text style={{textAlign: 'center'}}>{title ?? ''}</Text>
      </View>
      <View style={{flex: 0.1}}>
        {showCart && <CartItemHeader navigation={navigation} />}
      </View>
    </View>
  );
};

export default Header;
