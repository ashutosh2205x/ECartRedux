import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import AllRoutes from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.rootContainer}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <Provider store={store}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <PaperProvider>
            <NavigationContainer>
              <AllRoutes />
            </NavigationContainer>
          </PaperProvider>
        </Provider>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  safeAreaContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default App;
