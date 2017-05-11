const Koa = require('koa');
const logger = require('koa-pino-logger')({
    name: 'app',
    prettyPrint: true,
    level: process.env.LOG_LEVEL || 'info'
});

const router = require('./route');
const app = new Koa();

app.use(logger);
app.use(router);
process.on('uncaughtException', error => {
    logger.logger.error(`uncaughtException: ${error}`);
});

app.listen(3000, () => { logger.logger.debug('app started at port 3000!'); });