export default class Connector {
    constructor(){
        if (this.constructor === Connector) {
            throw new TypeError('Abstract class cannot be instantiated directly');
        }
    }
    login(){}
    logout(){}
    checkUserLoginStatus(){}

}