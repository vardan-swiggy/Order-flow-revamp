import React from 'react';
import {OrderConfirmationData} from '../data/OrderConfirmViewModel';
import OrderConfirmView from '../view/OrderConfirmView';

type Props = {};

enum OrderConfirmVariants {
  INSTAMART, FOOD, ALCOHOL, AIRPORT, INSTAMART_RETURN, FOOD_RETURN, DEFAULT
}
const handleOnOrderconfirmPress = () => {};

const handleOnOrderConfirmRejectPress = () => {};

const getReducerByType = (variant: OrderConfirmVariants) => {
  if (variant ===OrderConfirmVariants.FOOD) {
    return {...defaultReducer ,foodOrderReducer};
  }
  else if(variant === OrderConfirmVariants.INSTAMART){
    return {...defaultReducer ,instamartOrderReducer};
  }else {
    return defaultReducer;
  }
  }
const getInitialDataByType = (variant: OrderConfirmVariants ) =>{
  if (variant === OrderConfirmVariants.FOOD) {
    return FOOD_ORDER_INIT_STATE;
  else if(variant === OrderConfirmVariants.INSTAMART){
    return INSTAMART_ORDER_INIT_STATE;
  }else {
    return DEFAULT_ORDER_INIT_STATE;
  }
};

const OrderConfirmContainer = () => {
  const INITIAL_DATA: OrderConfirmationData = getInitialDataByType()
  const reducer = useReducer(getReducer(), getInitialDataByType);

  return (
    if(isFoodOrder){
     return(  <FoodOrderConfirmView 
        {...foodOrderActionsBindings}
        {... foodOrderConfirmationData}
      />)
    }else if(isInstamartOrder){
      return (
        <InstamartOrderConfirmView 
        {...instamartOrderActionsBindings}
        {...instamartOrderConfimationData}
        />
      )else {
        <DefaultOrderConfirmationView 
          {...defaultOrderActionsBindings}
          {...defaultOrderConfirmationData}
        />
      }
    }
     
  );
};

export default OrderConfirmContainer;
