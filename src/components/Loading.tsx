import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

// import { Container } from './styles';

const Loading: React.FC = () => {
    return (
      <View style={styles.Loading}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
}

const styles = StyleSheet.create({
  Loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;