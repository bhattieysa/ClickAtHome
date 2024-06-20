import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import AppLoader from './AppLoader';

const App = () => {
  const [loading, setLoading] = useState(true);

  const onLoad = () => {
    setLoading(false);
  };

  const onError = (syntheticEvent) => {
    const { nativeEvent } = syntheticEvent;
    setLoading(false);
    Alert.alert('WebView Error', nativeEvent.description);
  };

  return (
    <View style={styles.container}>
      <StatusBar  backgroundColor="#96B748" />
      {loading && <AppLoader  visible={loading} />}
      <SafeAreaView style={styles.safeArea}>
        <WebView
          source={{ uri: 'https://clickathome.com.au' }}
          onLoad={onLoad}
          onError={onError}
          javaScriptEnabled={true}
          injectedJavaScript={`window.ReactNativeWebView.postMessage('Hello from WebView');`}
          style={styles.webview}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -25,
    marginLeft: -25,
  },
  safeArea: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;