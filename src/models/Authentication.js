module.exports = class Authentication {
	Authentication(connector) {
        this.connector = connector;
    }
	login() {
        this.connector.login();
    }
	logout() {
        this.connector.logout();
    }
	isUserLoggedIn() {
        return this.connector.isUserLoggedIn();
    }
};