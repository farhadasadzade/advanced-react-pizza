import PizzaModel from "../models/pizzaModel.js";

import mongoose from "mongoose";

export const getPizzas = async (req, res) => {
    try {
        const pizzas = await PizzaModel.find()

        res.status(200).json(pizzas)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPizza = async (req, res) => {
    const pizza = req.body

    const newPizza = new PizzaModel(pizza)

    try {
        await newPizza.save()

        res.status(201).json(newPizza)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const deletePizza = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No pizza with id: ${id}`);

    await PizzaModel.findByIdAndRemove(id);

    res.json({ message: "Pizza deleted successfully." });
}