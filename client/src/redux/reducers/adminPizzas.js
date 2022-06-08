const initialState = {
    pizzas: [],
    success: '',
    isLoaded: false
}

const adminPizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PIZZAS':
            return {
                ...state,
                pizzas: action.payload,
                isLoaded: true
            }
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            }
        case 'CREATE_PIZZA':
            return {
                ...state,
                pizzas: [action?.payload, ...state.pizzas]
            }
        case 'DELETE_PIZZA':
            return {
                ...state,
                pizzas: state.pizzas.filter((pizza) => pizza._id !== action.payload)
            }
        case 'SUCCESS':
            return {
                ...state,
                success: action?.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default adminPizzasReducer