module.exports = class Authentication {
    Authentication(connector) {
        this.connector = new connector;
    }
    login() {
        this.connector.login();
    }
    logout() { 
        this.connector.logout();
    }
    isUserLoggedIn() { 
        return this.connector.checkUserLoginStatus();
    }
}