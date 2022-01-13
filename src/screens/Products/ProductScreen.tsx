import {
  NavigationContext,
  NavigationRouteContext,
} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {Colors, ActivityIndicator} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import ProductCard from '../../components/ProductCard';
import {CONSTANTS} from '../../redux/actions/actionsConstants';
import {setProducts} from '../../redux/actions/ProductsActions';
import {getProductList} from '../../utils/api/APIActionCreator';
interface ProductProps {
  navigation: typeof NavigationContext;
  routes: typeof NavigationRouteContext;
}
const ProductScreen: React.FC<ProductProps> = ({navigation, routes}) => {
  const dispatch = useDispatch();
  const cart: [] = useSelector(state => state.cartItemsReducer);
  const productdata: [] = useSelector(state => state.getAllProducts.products);
  const loading = useSelector(state => state.getAllProducts.loading);
  const [productList, setProductList] = useState<[]>([]);

  useEffect(() => {
    // console.log(cart);
    if (cart.length > 0) {
      let temp = [...productList];
      cart.forEach(el => {
        temp.filter(function (item, index) {
          if (item.id === el.id) {
            alert(index);
            temp.splice(1, index);
          }
        });
      });
      // console.log('new temp', temp);
    }
  }, [cart]);

  useEffect(() => {
    getData();
    dispatch({type: CONSTANTS.GET_ALL_PRODUCTS_REQUEST});
  }, []);

  const getData = async () => {
    let data = await getProductList();
    if (data && data.status == 200 && data.data) {
      console.log('x', data);
      dispatch(setProducts(data.data));
    }
  };

  useEffect(() => {
    console.log('productdata', productdata);
    if (productdata && Array.isArray(productdata) && productdata.length > 0) {
      setProductList(productdata);
    }
  }, [productdata]);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} title={'Products'} />
      {loading ? (
        <Loader isloading={loading} />
      ) : (
        <FlatList
          data={productList}
          style={styles.flatlist}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => {
            return (
              cart.filter(e => e.id !== item.id) && (
                <ProductCard item={item} navigation={navigation} />
              )
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
