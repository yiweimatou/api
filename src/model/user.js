const BaseModel = require('./base');

class UserModel extends BaseModel {
    constructor() {
        super('account');
    }
    get(params) {
       return this.axios.get('get', { data: params }).then(data => {
            return data;
        });
    }
}

module.exports = UserModel;