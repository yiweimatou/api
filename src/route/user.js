"use strict";
var Router = require('koa-router');
var UserService = require('../model/user');
var userService = new UserService();
var userRouter = new Router({
    prefix: '/user',
});
userRouter.get('/', ctx => {
    userService.get().then(function (data) {
        ctx.body = data;
    });
});
module.exports = userRouter;
