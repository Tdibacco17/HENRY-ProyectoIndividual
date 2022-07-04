const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('temperament', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: { //nombre raza
            type: DataTypes.STRING,
        },
    }, { //cosas que trae la tabla por default
        timestamps: false,
    });
};

