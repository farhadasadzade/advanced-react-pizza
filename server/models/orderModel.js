import mongoose from 'mongoose'

const orderModel = mongoose.Schema({
    customerName: String,
    customerSurname: String,
    adress: Object,
    phone: String,
    orderItems: Object,
    price: String,
})

const OrderModel = mongoose.model('Order', orderModel)

export default OrderModel