/* const { Sequelize } = require("sequelize/types"); */

module.exports = (sequelize, Sequelize) =>{
    const Name = sequelize.define('name',{
        nid:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        namefood: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        price: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        picture: {
            type: Sequelize.STRING(500),
            allowNull: false
        },
    })
    return Name
}