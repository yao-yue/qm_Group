mysql2 是数据库驱动 node js 数据库  sql
sequlize ORM 工具   将数据库映射成对象   数据表行列结构映射成类和对象
sequelize 类Shop  new Shop({})
save findAll  count
=> mysql2 翻译成 sql语句 sql=> mysql database


sequelize commond 
 sequelize db:migrate                        Run pending migrations
  sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
  sequelize db:migrate:status                 List the status of all migrations
  sequelize db:migrate:undo                   Reverts a migration
  sequelize db:migrate:undo:all               Revert all migrations ran
  sequelize db:seed                           Run specified seeder
  sequelize db:seed:undo                      Deletes data from the database
  sequelize db:seed:all                       Run every seeder
  sequelize db:seed:undo:all                  Deletes data from the database
  sequelize db:create                         Create database specified by configuration
  sequelize db:drop                           Drop database specified by configuration
  sequelize init                              Initializes project
  sequelize init:config                       Initializes configuration
  sequelize init:migrations                   Initializes migrations
  sequelize init:models                       Initializes models
  sequelize init:seeders                      Initializes seeders
  sequelize migration:generate                Generates a new migration file                [aliases: migration:create]
  sequelize model:generate                    Generates a model and its migration           [aliases: model:create]
  sequelize seed:generate                     Generates a new seed file     