import {
  NavigationContext,
  NavigationRouteContext,
} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import CartFooter from '../../components/CartFooter';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import ProductCard from '../../components/ProductCard';
import {
  emptyCartAction,
  UpdateCartAction,
} from '../../redux/actions/CartActions';
interface CartItemProps {
  navigation: typeof NavigationContext;
  routes: typeof NavigationRouteContext;
}
const CartScreen: React.FC<CartItemProps> = ({navigation, routes}) => {
  const cartdata: [] = useSelector(state => state.cartItemsReducer);
  const loading = useSelector(state => state.getAllProducts.loading);
  const [cartItems, setcartItems] = useState<[]>([]);
  const [cartTotal, calculateCartTotal] = useState<string>('0');
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartdata && Array.isArray(cartdata) && cartdata.length > 0) {
      console.log('cartdata', cartdata);
      setcartItems(cartdata);
      calculateTotalFunction(cartdata);
    }
  }, [cartdata]);

  const calculateTotalFunction = (cartdata: []) => {
    let sum = 0;
    cartdata.forEach(el => {
      sum = sum + el.price;
    });
    calculateCartTotal(sum);
  };
  const removeFromCartDispatcher = async (item: object, index: number) => {
    let data: [] = [].concat(cartdata);
    let temp: [] = data.filter((el, index) => el.id !== item.id);
    console.log(cartdata, 'item removed', temp);
    setcartItems(temp);
    dispatch(UpdateCartAction(temp));
  };

  const emptyCartDispatcher = async () => {
    dispatch(emptyCartAction());
    setcartItems([]);
  };
  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        title={'My Cart'}
        backNav={true}
        showCart={false}
      />
      {loading ? (
        <Loader isloading={loading} />
      ) : (
        <>
          {cartItems.length > 0 && (
            <View
              style={{
                justifyContent: 'flex-end',
                flexDirection: 'row',
                paddingHorizontal: 10,
                marginVertical: 10,
              }}>
              <Button onPress={emptyCartDispatcher} mode="contained">
                Empty Cart
              </Button>
            </View>
          )}

          <FlatList
            data={cartItems}
            style={styles.flatlist}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => {
              return (
                <ProductCard
                  item={item}
                  navigation={navigation}
                  removeFromCart={true}
                  removeFromCartDispatcher={() =>
                    removeFromCartDispatcher(item, index)
                  }
                  addItemtoCartDispatcher={() => {}}
                />
              );
            }}
            ListEmptyComponent={
              <View
                style={[
                  styles.container,
                  {alignItems: 'center', paddingVertical: 100},
                ]}>
                <Text>Empty</Text>
              </View>
            }
          />
        </>
      )}
      <CartFooter total={cartTotal} />
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
