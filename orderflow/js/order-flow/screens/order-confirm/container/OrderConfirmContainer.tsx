import React from 'react';
import OrderConfirmView from '../view/OrderConfirmView';

type Props = {};

const handleOnOrderconfirmPress = () => {};

const handleOnOrderConfirmRejectPress = () => {};

const OrderConfirmContainer = () => {
  return (
    <OrderConfirmView
      onOrderConfirmPress={handleOnOrderconfirmPress}
      onOrderConfirmRejectPress={handleOnOrderConfirmRejectPress}
    />
  );
};

export default OrderConfirmContainer;
