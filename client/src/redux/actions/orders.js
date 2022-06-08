import * as api from '../../api/index'

export const getOrders = () => async (dispatch) => {
    try {
        const { data } = await api.fetchOrders()

        dispatch({ type: 'FETCH_ORDERS', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const createOrder = (newOrder) => async (dispatch) => {
    try {

        const { data, status } = await api.createOrder(newOrder)

        dispatch({ type: 'ORDER_SUCCESS', payload: status })
        dispatch({ type: 'CREATE_ORDER', payload: data })

    } catch (error) {
        console.log(error)
    }
}

export const deleteOrder = (id) => async (dispatch) => {
    try {

        await api.deleteOrder(id)

        dispatch({ type: 'DELETE_ORDER', payload: id })

    } catch (error) {
        console.log(error)
    }
}