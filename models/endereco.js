'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Endereco.belongsTo(models.User)
      Endereco.belongsTo(models.Pedido)
    }
  };
  Endereco.init({
    nome: DataTypes.STRING,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    bairro: DataTypes.STRING,
    logradouro: DataTypes.STRING,
    numero: DataTypes.STRING,
    complemento: DataTypes.STRING,
    cep: DataTypes.STRING,
    activity: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Endereco',
  });
  return Endereco;
};