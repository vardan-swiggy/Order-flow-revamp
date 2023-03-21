// eslint-disable-next-line @typescript-eslint/no-unused-vars
enum SurgeType {
  'RAIN',
  'TIP',
  'SURGE',
}

enum ViewState {
  'LOADING',
  'SUCESS',
  'ERROR',
}
type AddressData = {
  //...simplifiedAddress
  addressLine1: string;
  addressLine2: string;
  addressName: string;
  voiceDirectionUrl: string;
  deliveryInstructions: {
    //... data related to delivery instructions
  };
  contactInfo: {
    //... information to call customer
  };
  showMinimal: boolean;
  minimalAddress: string;
};

type MapsData = {
  // ... simplifiedMaps Data
  markers: [];
  showRoutes: [];
  geofenceBoundary: {}; // if applicable
};

enum FLOWS_IN_ORDER {
  DE_CX,
  DELIVERY_INSTRUCTIONS,
  RX_DE,
}

enum TaskType {
  REPORT,
  PICKUP,
  DROP,
  RTZ,
  RETURN,
}

enum JobType {
  FOOD = 'FOOD',
  FOOD_PLATFORM = 'FOOD_PLATFORM',
  BUY = 'BUY',
  PUDO = 'PUDO',
  REPORT = 'REPORT',
  STORE_LITE = 'STORE_LITE',
  RETURN = 'RETURN',
  RETURNTOHOTSPOT = 'RTH',
}


interface CoreOrderConfirmationViewModel {

}

interface StoreLiteOrderConfirmationViewModel extends CoreOrderConfirmationViewModel{

}

interface FoodOrderConfirmationViewModel extends CoreOrderConfirmationViewModel{

}

interface PudoOrderConfirmationViewModel extends CoreOrderConfirmationViewModel{
}

e 

export type OrderConfirmationViewModel = {
  loading: boolean;
  data: {
    earnings: {
      totalEarnings: [];
      surges: [{type: SurgeType; amount: number; title: string}];
    };
    address: AddressData;
    maps: MapsData;
    distance: {
      value: string;
    };
    time: {
      value: string;
    };
  };
  error: {};
};

/

ViewMOdel BusinessLine Logic 

Container --> Multiple Businessline specific Components


type OrderArrivedViewModel = {
  loading: boolean;
  data: {
    menus: MenuOptions;
    address: AddressData;
    maps: MapsData;
  };
  error: {};
};

type MenuOptions = {
  menus: [{id: MENU_OPTION; title: string; icon: string}];
};

enum MENU_OPTION {
  HELP,
  SOS,
  DE_CX,
}

// what are the different flows in CAPRD that needs configurability ?

// How Do I define base OrderFlow and add customizations for other flows on top of it ?

// Let's list down each and every thing in detail
