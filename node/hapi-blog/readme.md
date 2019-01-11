redis  缓存数据库
yarn add vision@4 inert@4 package@1
分页插件：   yarn add hapi-pagination@1
yarn add dayjs
yarn add hapi-redis@6


1. 分页 plugins
2. 参数校验 page=1 joi
3. blogs 表   sequelize-cli
4. models
5. routes findAll 
6. 不能每次都去取数据库  用redis做缓存  90%的sql查询挡掉  


sequelize commond 
 sequelize db:migrate                        Run pending migrations   // 创建表
  sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
  sequelize db:migrate:status                 List the status of all migrations
  sequelize db:migrate:undo                   Reverts a migration
  sequelize db:migrate:undo:all               Revert all migrations ran
  sequelize db:seed                           Run specified seeder     //入库
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
