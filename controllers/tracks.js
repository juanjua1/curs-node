const  {tracksModel} = require('../models');
 
/**
 * Obetener lista de la base de datos! 
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
    const data = tracksModel.find({});
    res.send({data})
};

/**
 * Obetener un detalle 
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {};

/**
 * Insertar un registro 
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res, next) => {
    const { body } = req
    console.log(body) 
    const date = await tracksModel.create(body)
    res.send({algo:1}) 
};

/**
 *  Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = (req, res) => {};

/**
 * Eliminar un registro 
 * @param {*} req
 * @param {*} res
 */
const deleteItem = (req, res) => {};

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem
};