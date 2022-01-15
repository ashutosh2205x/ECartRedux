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
const ProductDetails: React.FC<ProductProps> = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('routes', props.route.params.product);
  }, []);

  return (
    <View style={styles.container}>
      <Header
        navigation={props.navigation}
        title={props.route.params.product.title}
        backNav={true}
      />
      <View style={{flex: 1}}>
        <ProductCard
          item={props.route.params.product}
          navigation={props.navigation}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  flatlist: {
    flex: 1,
  },
});

export default ProductDetails;
