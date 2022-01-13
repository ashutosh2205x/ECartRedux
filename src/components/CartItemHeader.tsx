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

  useEffect(() => {
    console.log('cart', cart);
  }, [cart]);
  return (
    <View style={{justifyContent: 'flex-start'}}>
      <ADIcons size={25} name={'shoppingcart'} />
      <TouchableOpacity
        style={styles.cartLength}
        onPress={() => {
          navigation.navigate(ROUTES.MYCART);
        }}>
        <Text
          style={[{color: 'white', paddingHorizontal: 7, paddingVertical: 5}]}>
          {cart.length}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  cartLength: {
    // flex:1,
    backgroundColor: 'crimson',
    borderRadius: 50,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 10,
  },
});

export default CartItemHeader;
