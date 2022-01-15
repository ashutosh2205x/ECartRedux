import {NavigationContext} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {ROUTES} from '../navigation/constants';
import {addtoCartAction} from '../redux/actions/CartActions';

interface ProductCardProps {
  item: object;
  navigation: typeof NavigationContext;
  removeFromCart: boolean;
  removeFromCartDispatcher: () => void;
  addItemtoCartDispatcher: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  item,
  navigation,
  removeFromCart,
  removeFromCartDispatcher,
  addItemtoCartDispatcher,
}) => {
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
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ROUTES.PRODUCT_DETAILS, {product: item})
          }>
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
        </TouchableOpacity>
        <Card.Actions style={{justifyContent: 'flex-end'}}>
          <Paragraph style={{fontSize: 18, fontWeight: '600'}}>
            ${item?.price}
          </Paragraph>
        </Card.Actions>
        {removeFromCart ? (
          <Button onPress={() => removeFromCartDispatcher()}>
            Remove from Cart
          </Button>
        ) : (
          <Button onPress={() => addItemtoCartDispatcher()}>Add to Cart</Button>
        )}
      </Card>
    </View>
  );
};

export default ProductCard;
