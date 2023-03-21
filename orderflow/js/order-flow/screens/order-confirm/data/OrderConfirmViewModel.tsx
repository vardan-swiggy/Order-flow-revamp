export type OrderConfirmationData = {
  orderId: string;
  earning: {
    totalEarnings: {
      title: string;
      value: string;
    };
    surges: [{type: string; value: string; title: string; icon: string}];
  };
  title: string;
  subtitle: string;
};
