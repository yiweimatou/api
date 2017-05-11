var Router = require('koa-router');
var userRouter = require('./user');

var router = new Router();
router.use(userRouter.routes());
module.exports = router.routes();