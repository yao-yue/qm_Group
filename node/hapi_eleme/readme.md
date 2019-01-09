yarn add hapi-swagger@7 inert@4 vision@4 package

http://127.0.0.1:8000/documentation  接口文档地址

Swagger API UI框架
API 是开发工作中的一环，hapi-swagger 将API开发融合进代码之中。
前后端分离开发，依赖文档来交流
现代开发中，项目越来越大，用户越来越多，用户体验越来越重要，前端React/Vue独立开发，
后端不再负责整体项目架构，以提供API为主，文档也是代码，以plugin的方式接入,
register到app.js   /documentation
只要在每个route里配置一下 tags


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