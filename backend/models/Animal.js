const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Animal = sequelize.define("Animal", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    species: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthDate: {
        type: DataTypes.DATE,
    },
    vaccines: {
        type: DataTypes.TEXT,
    },
});

module.exports = Animal;