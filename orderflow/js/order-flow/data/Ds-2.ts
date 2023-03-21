/* eslint-disable @typescript-eslint/no-unused-vars */
//Possibility 1

export interface CoreOrderConfirmationViewModel {
    
}

interface StoreLiteOrderConfirmationViewModel
  extends CoreOrderConfirmationViewModel {}

interface FoodOrderConfirmationViewModel
  extends CoreOrderConfirmationViewModel {}

interface PudoOrderConfirmationViewModel
  extends CoreOrderConfirmationViewModel {}

interface DefaultOrderConfirmationViewModel {}

// possibility 2

interface CoreOrderConfirmationViewModel {}

interface DefaultOrderConfirmationViewModel {}

// possibility 3

interface CoreOrderConfirmationViewModel {}

interface ReturnOrderConfirmationViewModel
  extends CoreOrderConfirmationViewModel {}


render (viewModel : CoreOrderConfirmationViewModel){
    if(viewModel instanceof StoreLiteOrderConfirmationViewModel){
        return <StoreLiteOrderConfirmationView viewModel={viewModel}/>
    }
    else if(viewModel instanceof FoodOrderConfirmationViewModel){
        return <FoodOrderConfirmationView viewModel={viewModel}/>
    }
    else {
        return <DefaultOrderConfirmationView viewModel={viewModel}/>
    }
}