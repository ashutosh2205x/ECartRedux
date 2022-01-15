import {
  NavigationContext,
  NavigationRouteContext,
} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Header from '../../components/Header';
import {addtoCartAction} from '../../redux/actions/CartActions';
interface ProductProps {
  navigation: typeof NavigationContext;
  routes: typeof NavigationRouteContext;
}
const ProductDetails: React.FC<ProductProps> = props => {
  const [addtoCart, ToggleCartAction] = useState<boolean>(false);
  const dispatch = useDispatch();

  const {product} = props.route.params;

  console.log('props', product);
  return (
    <View style={styles.container}>
      <Header
        navigation={props.navigation}
        title={'Details'}
        backNav={true}
        showCart={true}
      />
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <ScrollView>
            <View style={{alignItems: 'center', marginHorizontal: 30}}>
              <Image
                style={styles.productImg}
                source={{
                  uri: product.image,
                }}
              />
              <Text style={styles.name}>{product.title}</Text>
              <Text style={styles.price}>$ {product.price}</Text>
              <Text style={styles.description}>{product.description}</Text>
            </View>
            <View style={styles.starContainer}>
              <Image
                style={styles.star}
                source={{
                  uri: 'https://img.icons8.com/color/40/000000/star.png',
                }}
              />
              <Image
                style={styles.star}
                source={{
                  uri: 'https://img.icons8.com/color/40/000000/star.png',
                }}
              />
              <Image
                style={styles.star}
                source={{
                  uri: 'https://img.icons8.com/color/40/000000/star.png',
                }}
              />
              <Image
                style={styles.star}
                source={{
                  uri: 'https://img.icons8.com/color/40/000000/star.png',
                }}
              />
              <Image
                style={styles.star}
                source={{
                  uri: 'https://img.icons8.com/color/40/000000/star.png',
                }}
              />
            </View>
            {/* <View style={styles.contentColors}>
              <TouchableOpacity
                style={[
                  styles.btnColor,
                  {backgroundColor: '#00BFFF'},
                ]}></TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btnColor,
                  {backgroundColor: '#FF1493'},
                ]}></TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btnColor,
                  {backgroundColor: '#00CED1'},
                ]}></TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btnColor,
                  {backgroundColor: '#228B22'},
                ]}></TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btnColor,
                  {backgroundColor: '#20B2AA'},
                ]}></TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.btnColor,
                  {backgroundColor: '#FF4500'},
                ]}></TouchableOpacity>
            </View> */}
            {/* <View style={styles.contentSize}>
              <TouchableOpacity style={styles.btnSize}>
                <Text>S</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnSize}>
                <Text>M</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnSize}>
                <Text>L</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnSize}>
                <Text>XL</Text>
              </TouchableOpacity>
            </View> */}
            <View style={styles.separator}></View>
            <View style={styles.addToCarContainer}>
              {addtoCart ? (
                <TouchableOpacity
                  style={[styles.shareButton, {backgroundColor: 'green'}]}
                  onPress={() => dispatch(addtoCartAction(product))}>
                  <Text style={styles.shareButtonText}>Added</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.shareButton}
                  onPress={() => {
                    dispatch(addtoCartAction(product));
                    ToggleCartAction(true);
                  }}>
                  <Text style={styles.shareButtonText}>Add To Cart</Text>
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  productImg: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 20,
    paddingVertical: 20,
    color: '#696969',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    color: '#696969',
  },
  star: {
    width: 40,
    height: 40,
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: '#778899',
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: 'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentColors: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentSize: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  separator: {
    height: 2,
    backgroundColor: '#eeeeee',
    marginTop: 20,
    marginHorizontal: 30,
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  addToCarContainer: {
    marginHorizontal: 30,
  },
});

export default ProductDetails;
