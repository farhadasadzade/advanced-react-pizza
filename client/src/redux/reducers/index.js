import { combineReducers } from 'redux';

import cartReducer from './cart'
import adminPizzasReducer from './adminPizzas';
import ordersReducer from './orders';

const rootReducer = combineReducers({
    cart: cartReducer,
    adminPizzas: adminPizzasReducer,
    orders: ordersReducer
})

export default rootReducer;