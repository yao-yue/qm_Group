const env = process.env;
console.log(env);

module.exports ={
    host: env.HOST,
    port: env.PORT
}