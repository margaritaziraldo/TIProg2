module.exports = function (sequelize, datatypes) {

    let alias = "User";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: datatypes.INTEGER
        },
        username: {
            type: datatypes.STRING
        },
        email: {
            type: datatypes.STRING
        },
        contrasenia: {
            type: datatypes.STRING
        },
        profilepic: {
            type: datatypes.STRING
        },
        createdAt: {
            type: datatypes.DATE
        },
        updatedAt: {
            type: datatypes.DATE
        }
    };

    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    };

    const Users = sequelize.define(alias, cols, config);

    Users.associate = function(models) {
        Users.hasMany(models.Product, {
            as: "productos_usuario",
            foreignKey: "idUsuario"
        });
    };


    return Users;
}