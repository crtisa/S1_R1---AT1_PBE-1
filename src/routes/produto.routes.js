import express from 'express';
const router = express.Router();
import produtoController from "../controllers/produto.controller.js";
import uploadImage from "../middlewares/uploadimage.middleware.js";

produtoRoutes.post('/produtos/images', uploadImage, produtoController.upload);


export default produtoRoutes;