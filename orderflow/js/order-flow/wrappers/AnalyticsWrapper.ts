const sendEvent = (event: string, data: any) => {
  console.log('sendEvent', event, data);
};

export default sendEvent;

// Purpose of building this just to provide better interface for analytics helpers on
// order-flow and Make sure we have just one source where this thing would happen
