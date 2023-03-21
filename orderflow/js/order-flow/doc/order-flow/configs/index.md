In the current order-flow we have this problem where we are accessing the configs using multiple places on the code Firebase | OTPConfigs | Other sources.

In order to solve this issue in the new order-flow we will create a wrapper for the OrderConfigs since building the ConfigModule might take some time. This will ensure that the configs are fetched using the uniform structure 



ways to implement the configWrapper
/*
    class ConfigWrapper {
        getRXDEConfigs: RxDEConfigs --> Will get all the configs related to RX-DX

        getAirportModelConfigs: AirportModelConfigs --> Will get all the configs related to the airportModel

        getGeofenceConfigs: GeofenceConfigs --> Will get all the configs related to the geofence flow


        Broad idea here is to discourage defining individual configs like for LLDComms we wave 8-9 different configs instead here we will expose one method which will fetch all the eight configs and provide the data in the single access method

        getLLDCommsConfigs: LLDCommsConfig --> Will get all the configs related to a particular feature

        in general struture should be

        getCoreOrderConfigs: OrderConfigs

        getFeatureXConfigs: FeatureXConfigType

        ...configs related to other features
    }


*/