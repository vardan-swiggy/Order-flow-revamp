/* eslint-disable @typescript-eslint/no-unused-vars */
// Calling Native Module to update the order status
// log analytics for attempt
// log analytics for success
// log analytics for failure

export const confirmOrder = (req: OrderConfirmReq) => {};

export const rejectOrder = (req: OrderArrivedReq) => {};

export const markArrived = (req: OrderPickedUpReq) => {};

export const markPickedUp = (req: OrderPickedUpReq) => {};

export const markReached = (req: OrderReachedReq) => {};

export const markDelivered = (req: OrderDeliveredReq) => {};

type OrderConfirmReq = {};

type OrderArrivedReq = {};

type OrderPickedUpReq = {};

type OrderReachedReq = {};

type OrderDeliveredReq = {};
