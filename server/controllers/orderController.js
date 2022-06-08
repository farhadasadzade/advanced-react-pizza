import OrderModel from '../models/orderModel.js'

import mongoose from 'mongoose'

export const getOrders = async (req, res) => {
    try {
        const orders = await OrderModel.find()

        res.status(200).json(orders)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createOrder = async (req, res) => {
    const order = req.body

    const newOrder = new OrderModel(order)

    try {
        await newOrder.save()

        res.status(201).json(newOrder)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const deleteOrder = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No order with id: ${id}`);

    await OrderModel.findByIdAndRemove(id);

    res.json({ message: "Order deleted successfully." });
}