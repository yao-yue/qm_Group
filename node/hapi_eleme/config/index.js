const env = process.env;
console.log(env);

module.exports ={
    host: env.HOST,
    port: env.PORT
}

const configs = require('../config/config.js')

const config = {
    ...configs[env],
    define: {
        underscore: true
    }
}