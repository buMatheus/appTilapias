'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pedido.hasMany(models.Item)
      Pedido.hasMany(models.Endereco)
      Pedido.belongsTo(models.User)
    }
  };
  Pedido.init({
    valor: DataTypes.FLOAT,
    status: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    enderecoId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};