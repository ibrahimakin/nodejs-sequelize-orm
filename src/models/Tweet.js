const Sequelize = require("sequelize");

module.exports = sequelize.define("Tweet", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    content: Sequelize.STRING(300),

});