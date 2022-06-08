import mongoose from "mongoose";

const pizzaModel = mongoose.Schema({
    name: String,
    prices: Array,
    image: String,
})

const PizzaModel = mongoose.model('Pizza', pizzaModel)

export default PizzaModel