module.exports = class Authentication {
    #connector;
	constructor(connector) {
        this.#connector = connector;
    }
	login() {
        this.#connector.login();
    }
	logout() {
        this.#connector.logout();
    }
	isUserLoggedIn() {
        return this.#connector.checkUserLoginStatus();
    }
};