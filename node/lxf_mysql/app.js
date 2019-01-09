// 数据服务： 
const Sequelize = require('sequelize');
const config = require('./config/config');
console.log('init sequelize...');

var sequelize = new Sequelize(config.database, config.username, config.password,
    {
        host: config.host,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 3000,
        }
    })

// ORM
// var Pet = sequelize.define('pet', {
//     id: {
//         type: Sequelize.STRING(50),
//         primaryKey: true,
//     },
//     name:Sequelize.STRING(100),
//     gender: Sequelize.BOOLEAN,
//     birth: Sequelize.STRING(10),
//     createdAt: Sequelize.BIGINT,
//     updatedAt: Sequelize.BIGINT,
//     version: Sequelize.BIGINT,
// },{
//     timestamps: false
// });

// var now = Date.now();
// Pet.create({
//     id: 'g-' + now,
//     name: 'Gaffey',
//     gender: false,
//     birth: '2007-01-01',
//     createdAt: now,
//     updatedAt: now,
//     version: 0
// }).then((p) => {
//     console.log(`create.${JSON.stringify(p)}`);
// }).catch(err => {
//     console.log(`failed：${err}`);
// })

(async() => {
    var pets = await pets.findAll({
        where: {
            name: 'Gaffey'
        }
    });
    console.log(`find All ${pets.length} pets`)
    for(let p of pets) {
        console.log(JSON.stringify(p));
    }
})();