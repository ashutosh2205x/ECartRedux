import {
  NavigationContext,
  NavigationRouteContext,
} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {Colors, ActivityIndicator} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
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
  const productdata: [] = useSelector(state => state.getAllProducts.products);
  const loading = useSelector(state => state.getAllProducts.loading);
  const [productList, setProductList] = useState<[]>([]);

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
      {loading && <Loader isloading={loading} />}
      <FlatList
        data={productList}
        style={styles.flatlist}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => {
          return <ProductCard item={item} navigation={navigation} />;
        }}
      />
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
