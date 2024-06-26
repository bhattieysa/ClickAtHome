import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  View,
  StyleSheet,
  ActivityIndicator,
  Easing,
} from 'react-native';


class AppLoader extends React.Component {
  render() {
    const { onRequestClose, type, visible } = this.props;
    return (
      <>
      {visible==true?
              <View style={styles.container}>
                <ActivityIndicator style={{ transform: [{ scaleX: 1.7 }, { scaleY: 1.7 }] }} animating  size='large' color={'#96B748'} />
              </View>
              :
              <></>
              
      }
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3, // works on ios
    elevation: 3, // works on android
  },
});

AppLoader.propTypes = {
  onRequestClose: PropTypes.func,
};

AppLoader.defaultProps = {
  onRequestClose: () => { },
};

export default AppLoader;