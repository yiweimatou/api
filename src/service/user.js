const userModel = require('../model/user')();

class UserService {
    get(params) {
        return userModel.get(params);
    }
}
module.exports = UserService;
