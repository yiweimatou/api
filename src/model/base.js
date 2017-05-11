const axios = require("axios");
const DOMAIN = "http://api.yiweimatou.com:4001/";

class BaseModel {
    constructor(name) {
        this.baseURL = this.generateUrl(name);
        this.axios = axios.default.create({
            baseURL: this.baseURL,
            timeout: 3000,
            headers: {
                post: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        });
    }
    generateUrl(name) {
        return DOMAIN + name;
    }
}

module.exports = BaseModel;
