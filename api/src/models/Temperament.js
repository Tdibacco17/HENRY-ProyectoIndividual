const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('temperament', {
        name: { //nombre raza
            type: DataTypes.STRING,
        },
    }, { //cosas que trae la tabla por default
        timestamps: false,
    });
};

