import express from "express";

import { getPizzas, createPizza, deletePizza } from "../controllers/pizzaController.js";

const router = express.Router()

router.get('/', getPizzas)
router.post('/', createPizza)
router.delete('/:id', deletePizza)


export default router;