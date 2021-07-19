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
      Pedido.hasMany(models.Item);
      Pedido.belongsTo(models.Endereco);
      Pedido.belongsTo(models.User);
    }
  };
  Pedido.init({
    valor: DataTypes.FLOAT,
    status: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    EnderecoId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};