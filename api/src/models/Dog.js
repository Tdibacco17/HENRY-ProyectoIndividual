const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: { //nombre raza
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: { //altura
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: { //peso
      type: DataTypes.STRING,
      allowNull: false,
     },
     years: { //años
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, { //cosas que trae la tabla por default
    timestamps: false,
  });
};
