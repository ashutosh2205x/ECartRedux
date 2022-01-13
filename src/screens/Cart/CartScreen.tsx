import {
  NavigationContext,
  NavigationRouteContext,
} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import ProductCard from '../../components/ProductCard';
import {CONSTANTS} from '../../redux/actions/actionsConstants';
interface CartItemProps {
  navigation: typeof NavigationContext;
  routes: typeof NavigationRouteContext;
}
const CartScreen: React.FC<CartItemProps> = ({navigation, routes}) => {
  const cartdata: [] = useSelector(state => state.cartItemsReducer);
  const loading = useSelector(state => state.getAllProducts.loading);
  const [cartItems, setcartItems] = useState<[]>([]);

  useEffect(() => {
    console.log('productdata', cartdata);
    if (cartdata && Array.isArray(cartdata) && cartdata.length > 0) {
      setcartItems(cartdata);
    }
  }, [cartdata]);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} title={'My Cart'} />
      {loading ? (
        <Loader isloading={loading} />
      ) : (
        <FlatList
          data={cartItems}
          style={styles.flatlist}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => {
            return <ProductCard item={item} navigation={navigation} />;
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  flatlist: {
    flex: 1,
  },
});

export default CartScreen;
