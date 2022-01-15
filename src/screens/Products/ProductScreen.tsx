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
import {addtoCartAction} from '../../redux/actions/CartActions';
import {fetchAllProducts} from '../../redux/actions/ProductsActions';
interface ProductProps {
  navigation: typeof NavigationContext;
  routes: typeof NavigationRouteContext;
}
const ProductScreen: React.FC<ProductProps> = ({navigation, routes}) => {
  const dispatch = useDispatch();
  const cart: [] = useSelector(state => state.cartItemsReducer);
  const productdata: [] = useSelector(state => state.getAllProducts.products);
  const loading = useSelector(state => state.getAllProducts.loading);
  const cartdata: [] = useSelector(state => state.cartItemsReducer);

  const [productList, setProductList] = useState<[]>([]);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  useEffect(() => {
    if (productdata && Array.isArray(productdata) && productdata.length > 0) {
      setProductList(productdata);
    }
  }, [productdata]);

  const addItemtoCartDispatcher = async (item: object, index: number) => {
    dispatch(addtoCartAction(item));
  };

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        title={'Products'}
        backNav={false}
        showCart={true}
      />
      {loading ? (
        <Loader isloading={loading} />
      ) : (
        <FlatList
          data={productList}
          style={styles.flatlist}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => {
            return (
              <ProductCard
                item={item}
                removeFromCart={false}
                navigation={navigation}
                addItemtoCartDispatcher={() =>
                  addItemtoCartDispatcher(item, index)
                }
                removeFromCartDispatcher={() => {}}
              />
            );
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

export default ProductScreen;
