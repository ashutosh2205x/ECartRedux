import {NavigationContext} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ADIcons from 'react-native-vector-icons/AntDesign';
import CartItemHeader from './CartItemHeader';
interface FooterProps {
  total: string;
}
const CartFooter: React.FC<FooterProps> = ({total}) => {
  return (
    <View
      style={{
        flex: 0.05,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'row',
        borderTopColor: 'black',
        borderTopWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginVertical: 10,
        marginBottom: 5,
      }}>
      <Text style={styles.price}>$ {total ?? ''}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  price: {
    marginTop: 10,
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CartFooter;
