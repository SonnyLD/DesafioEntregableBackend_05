import { ProductModel } from "../dao/models/products.models.js";

export async function getProduct(idProduct) {
  try {
    const product = await ProductModel.findById(idProduct);
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getProducts() {
  try {
    const productos = await ProductModel.find({ deletedAt: { $exists: false } });
    return productos;
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function createProduct(data) {
  try {
    const product = await ProductModel.create(data);
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateProduct(idProduct, data) {
  try {
    // await UserModel.updateOne({ _id: idUsuario }, data)
    // const user = getUser(idUsuario)
    const updatedProduct = await ProductModel.findByIdAndUpdate(idProduct, data, { new: true });
    return updatedProduct;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteProduct(idProduct) {
  try {
    await ProductModel.delete({ _id: idProduct });
  } catch (error) {
    throw new Error(error.message);
  }
}