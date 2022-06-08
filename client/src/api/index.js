import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const fetchPizzas = () => API.get('/pizzas')
export const createPizza = (newPizza) => API.post('/pizzas', newPizza)
export const deletePizza = (id) => API.delete(`/pizzas/${id}`)

export const fetchOrders = () => API.get('/orders')
export const createOrder = (newOrder) => API.post('/orders', newOrder)
export const deleteOrder = (id) => API.delete(`/orders/${id}`)
