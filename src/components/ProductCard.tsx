import {NavigationContext} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../redux/actions/CartActions';

interface ProductCardProps {
  item: object;
  navigation: typeof NavigationContext;
}

const ProductCard: React.FC<ProductCardProps> = ({item, navigation}) => {
  const dispatch = useDispatch();

  return (
    <View
    // onPress={() => alert(item.id)}
    >
      <Card
        elevation={2}
        style={{
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'grey',
          margin: 5,
        }}>
        <Card.Content style={{alignItems: 'center'}}>
          <Title>{item?.title}</Title>
          <Paragraph>{item?.category}</Paragraph>
        </Card.Content>
        <Card.Cover
          source={{uri: item?.image ?? 'https://picsum.photos/700'}}
        />
        <Card.Content>
          <Paragraph
            ellipsizeMode={'tail'}
            numberOfLines={3}
            style={{paddingBottom: 20}}>
            {item?.description}
          </Paragraph>
        </Card.Content>
        <Card.Actions style={{justifyContent: 'space-between'}}>
          <Paragraph style={{fontSize: 18, fontWeight: '600'}}>
            ${item?.price}
          </Paragraph>
          <Button onPress={() => dispatch(addToCart(item))}>Add to Cart</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default ProductCard;
