import * as api from '../../api/index'

export const getPizzas = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPizzas()

        dispatch(setLoaded(false))
        dispatch({ type: 'FETCH_PIZZAS', payload: data })

    } catch (error) {
        console.log(error)
    }
}

export const setLoaded = val => ({
    type: 'SET_LOADED',
    payload: val
})

export const createPizza = (newPizza) => async (dispatch) => {
    try {

        const { data, status } = await api.createPizza(newPizza)

        dispatch({ type: 'SUCCESS', payload: status })
        dispatch({ type: 'CREATE_PIZZA', payload: data })

    } catch (error) {
        console.log(error)
    }
}

export const deletePizza = (id) => async (dispatch) => {
    try {

        const { status } = await api.deletePizza(id)

        dispatch({ type: 'SUCCESS', payload: status })
        dispatch({ type: 'DELETE_PIZZA', payload: id })

    } catch (error) {
        console.log(error)
    }
}