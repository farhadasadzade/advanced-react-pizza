import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import pizzaRoutes from './routes/pizzaRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/pizzas', pizzaRoutes)
app.use('/orders', orderRoutes)


app.get('/', (req, res) => {
    res.send('Server is running')
})

const DB_URL = 'mongodb+srv://reactpizza:reactpizza9789@react-pizza.sdaoy.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on ${PORT}`)))
    .catch((error) => console.log(error.message))