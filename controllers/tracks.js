const {marchedData} = require('express-validator');
const  {tracksModel} = require('../models');
const { handleHttpError } = require('../utils/handleErrror');
 
/**
 * Obetener lista de la base de datos! 
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try{ 
    const data = tracksModel.find({});
    res.send({data})
  }catch(e){
    handleHttpError(res,"ERROR_GET_ITEMS");
  }
};

/**
 * Obetener un detalle 
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {;
  try{
    req = matchedData(req);
    const {id} = req;
    const data = tracksModel.findById({id});
    res.send({data})
  }catch(e){
    handleHttpError(res,"ERROR_GET_ITEM");
  }
};


/**
 * Insertar un registro 
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {

  try{ 
    const body = marchedData(req);
    const date = await tracksModel.create(body)
    res.send({ data }) 
  }catch(e){
    handleHttpError(res,"ERROR_CREATE_ITEM");
  }
};

/**
 *  Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
  try{ 
    const {id, ...body} = marchedData (req);
    const date = await tracksModel.findOneAndUpdate(
      {id},body,
    )
    res.send({ data }) 
  }catch(e){
    handleHttpError(res,"ERROR_UPDATE_ITEM");
  }
};

/**
 * Eliminar un registro 
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try{
    req = matchedData(req);
    const {id} = req;
    const data = tracksModel.deleteOne({_id:id});
    res.send({data})
  }catch(e){
    console.log(e)
    handleHttpError(res,"ERROR_DELETE_ITEM");
  }
};

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem
};