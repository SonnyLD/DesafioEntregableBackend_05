import * as CartService from "../services/carts.services.js";
import { STATUS } from "../constant/constant.js";

export async function getCart(req, res) {
  try {
    const { idCart } = req.params;
    const response = await CartService.getCart(idCart);
    res.json({
      cart: response,
      status: STATUS.SUCCESS,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      status: STATUS.FAIL,
    });
  }
}

export async function createCart(req, res) {
  try {
    const { body } = req;
    const response = await CartService.createCart(body);
    res.status(201).json({
      cart: response,
      status: STATUS.SUCCESS,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      status: STATUS.FAIL,
    });
  }
}

export async function addProductToCart(req, res) {
  try {
    const { idCart, idProduct, quantity } = req.params;
    const { body } = req;
    const response = await CartService.addProductToCart(idCart, idProduct, quantity, body);
    res.status(201).json({
      cart: response,
      status: STATUS.SUCCESS,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      status: STATUS.FAIL,
    });
  }
}
export async function deleteCart(req, res) {
  try {
    const { idCart } = req.params;
    await CartService.deleteCart(idCart);
    res.status(201).json({
      message: "Cart borrado correctamente",
      status: STATUS.SUCCESS,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      status: STATUS.FAIL,
    });
  }
}
