type OrderConfirmRequest = {};

export interface StatusUpdateModule {
  confirmOrder<Req, Res>(request: Req): Promise<Res>;
}

export class FoodStatusUpdateModule implements StatusUpdateModule {
  confirmOrder<Req, Res>(request: Req): Promise<Res> {
    throw new Error('Method not implemented.');
  }
}
