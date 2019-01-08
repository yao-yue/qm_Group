mysql -uroot -p

yarn add env2 mysql2 sequelize sequelize-cli
node_modules\.bin\sequelize init
node_modules\.bin\sequelize db:create 
node_modules\.bin\sequelize migration:generate --name create-shops-tabe
node_modules\.bin\sequelize db:migrate

migrate  迁移  

- 首先考虑安全
    数据库的链接信息，统一放到.env文件下来保存
    .gitignore 来阻止上传github
    env2 npm   读取env文件的  npm包

- sequelize 命令行
sequelize-cli 这里将集成mysql 初始化
node react app  数据库服务（数据存储）
简化sql 操作
1. 一个应用对应一个数据库  eleme DB_NAME 使用sequelize工具来形象化mysql操作
2. 代码运行环境分为开发环境(devlep)，线上环境(production),测试环境(test)
3. 线上mysql的密码不会给我们
    process.env.NODE_ENV 设置当前环境
    线上机器走 .env.prod
    本地走     .env 只需要有基本结构和一些数据就好了。
    env2       帮我们将.env逐行读取为配置

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