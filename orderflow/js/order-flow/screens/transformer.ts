import { OrderConfirmationData } from "./order-confirm/data/OrderConfirmViewModel";

export interface Transformer<T>{
   transform(storeData:any) : T
}
// many ways possible to build this should we use some kind of pattern to build it

// list of transformers like address map distance time etc

// one method for transform the data which takes list of these functions and run them

export function geofenceTransform() {}

export function addressTransform() {}

function transformAddress(storeData: any): OrderConfirmationData {
  const address =  {
    address: 'address',
    city: 'city',
    state: 'state',
    zip: 'zip',
  };
  val data = OrderConfirmationData()
  
}
function tranformDistance(storeData: any): Distance {
  return {
    value: 'value',
  };
}

function transformMapsData(storeData: any): MapsData {
  return {};
}

function getTransformersForOrderConfirm() {
  return (
    transformEarning,
    transformAddress,
    transformMaps,
    transformDistance,
    transformTime
  );
}

function transform(storeData: any): OrderArrivedViewModel {
  val transformers =   
}
