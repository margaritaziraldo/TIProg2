 module.exports = function(sequelize, datatypes) {

     let alias = "User";
   
     let cols = {
         id: {
             autoIncrement: true,
             primaryKey: true,
             type: datatypes.INTEGER
         },
         name: {
             type: datatypes.STRING(255)
         },
         email: {
             type: datatypes.STRING(255)
         },
         password: {
             type: datatypes.STRING(255)
         },
         remember_token: {
             type: datatypes.STRING(100)
         },
         createdAt: {
             type: datatypes.DATE
         },
         updatedAt: {
             type: datatypes.DATE
         }
     };

     let config = {
         tableName: "users",
         timestamps: true,
         underscored: true
     };

     const Users = sequelize.define(alias, cols, config);
     return Users;
 }