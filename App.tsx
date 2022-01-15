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
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.rootContainer}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <PaperProvider>
              <NavigationContainer>
                <AllRoutes />
              </NavigationContainer>
            </PaperProvider>
          </PersistGate>
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
