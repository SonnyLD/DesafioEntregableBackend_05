import express from "express";
import * as cartsController from '../controllers/carts.controllers.js'

const cartsRouter = express.Router();

cartsRouter.get('/:idCart', cartsController.getCart)
cartsRouter.post('/', cartsController.createCart)
cartsRouter.put('/:idCart/product/:productID/:quantity', cartsController.addProductToCart)
cartsRouter.delete('/:idCart', cartsController.deleteCart)

export default cartsRouter;







