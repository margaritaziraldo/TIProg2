module.exports = function (sequelize, datatypes) {

    let alias = "Product";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: datatypes.INTEGER
        },
        nombre: {
            type: datatypes.STRING
        },
        descripcion: {
            type: datatypes.STRING
        },
        imagen: {
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
        tableName: "productos",
        timestamps: true,
        underscored: false
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.User, {
            as: "usuario_producto",
            foreignKey: "idUsuario"
        });
    }

    return Product;
}