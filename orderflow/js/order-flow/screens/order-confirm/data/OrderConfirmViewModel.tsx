import React from 'react';
import {View, Text} from 'react-native';

// Now from the global state I need data that I can extract and pass it to the Container component
// Where Do I handle the feature gate and config logic?
// where do I send the analytics event?

const OrderConfirmViewModel = () => {
  return (
    <View>
      <Text>Order-Flow ViewModel</Text>
    </View>
  );
};

export default OrderConfirmViewModel;
