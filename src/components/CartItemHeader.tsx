import {NavigationContext} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ADIcons from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {ROUTES} from '../navigation/constants';
interface HeaderProps {
  navigation: typeof NavigationContext;
}
const CartItemHeader: React.FC<HeaderProps> = ({navigation}) => {
  const cart: [] = useSelector(e => e.cartItemsReducer);

  return (
    <TouchableOpacity
      style={{justifyContent: 'flex-end'}}
      onPress={() => navigation.navigate(ROUTES.MYCART)}>
      <ADIcons size={35} name={'shoppingcart'} />
      <View style={styles.cartLength}>
        <Text
          style={[
            {
              color: 'white',
              fontSize: 14,
              justifyContent: 'flex-end',
              textAlign: 'center',
              padding: 8,
            },
          ]}>
          {cart.length}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  cartLength: {
    backgroundColor: 'crimson',
    opacity: 0.9,
    borderRadius: 50,
    // flex:1,
    position: 'absolute',
    top: 0,
    // bottom: 10,
    right: 15,
  },
});

export default CartItemHeader;
