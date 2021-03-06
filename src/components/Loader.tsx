import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Modal,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {COLORS} from '../helpers/helpers';

interface LoaderProps {
  isloading: boolean;
}
const Loader: React.FC<LoaderProps> = ({isloading}) => {
  useEffect(() => {}, []);
  return (
    <View style={styles.rootContainer}>
      <ActivityIndicator
        size={'large'}
        animating={true}
        color={Colors.red800}
        style={{
          paddingBottom: 10,
        }}
      />
      <Text>Loading ... </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT_GREY,
  },
});

export default Loader;
