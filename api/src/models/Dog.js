const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,  //algoritmo que genera numero aletatorio
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: { //nombre raza
      type: DataTypes.STRING,
      allowNull: false,    //para que sea campo obligatorio
    },
    height_min: { //altura
      type: DataTypes.STRING,
      allowNull: false,
    },
    height_max: { //altura
      type: DataTypes.STRING,
      allowNull: true,
    },
    weight_min: { //peso min
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight_max: { //peso max
      type: DataTypes.STRING,
      allowNull: true,
    },
    year_min: { //años
      type: DataTypes.STRING,
      allowNull: true,
    },
    year_max: { //años
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:
        'https://www.clarin.com/img/2021/07/24/llegan-a-pesar-mas-de___yqKyyB2BQ_720x0__1.jpg'
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  }, { //cosas que trae la tabla por default de hora y fecha de creacion
    timestamps: false,
  });
};
