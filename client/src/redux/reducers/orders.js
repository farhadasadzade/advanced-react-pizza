const initialState = {
    orders: [],
    orderSuccess: ''
}

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ORDERS':
            return {
                ...state,
                orders: action.payload,
            }
        case 'CREATE_ORDER':
            return {
                ...state,
                orders: [action?.payload, ...state.orders]
            }
        case 'DELETE_ORDER':
            return {
                ...state,
                orders: state.orders.filter((order) => order._id !== action.payload)
            }
        case 'ORDER_SUCCESS':
            return {
                ...state,
                orderSuccess: action?.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default ordersReducer