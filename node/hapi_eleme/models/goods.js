module.exports =  (sequelize, DataTypes) => sequelize.define(
    'goods',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        thumb_url: DataTypes.STRING
    },
    {
        tablename: 'goods'
    }
)