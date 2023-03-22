Flow for the status updates on the new ux4 screens
    statusUpdateHelper --> SwiggyRNOrderFlowModule --> EntitySyncServiceV2


StatusUpdateHelper 
    interface {
        orderConfirm(req: OrderConfirmReqType): OrderConfirmResType{
            SwiggyRNOrderFlow.confirmOrder(req)
        }
        ...
    }

SwiggyRNOrderFlow {
        orderConfirm(req, promise){
            EntitySyncServiceV2.orderConfirm(--)
                .onSuccess(res => promise.resolve(res))
                .onFailure(error => promise.reject(error))
        }
}

EntitySyncServiceV2 extends EntityServiceV1 {
        orderConfirm(req, promise){
            // directly do the api call to update the status no intermediate steps
        }
        ...similar for other flows
}
