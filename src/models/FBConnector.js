import "https://connect.facebook.net/en_US/sdk.js";

import Connector from "./Connector";

export default class FBConnector extends Connector {
	constructor() {
		super();
		FB.init({
			appId: "959507645767483",
			cookie: true,
			xfbml: true,
			version: "v19.0",
		});

		this.checkUserLoginStatus();
	}
	#statusChangeCallback(response) {
		if (response.status === "connected") {
            this.toggleVisibility("facebook-login-btn");
            this.toggleVisibility("facebook-logout-btn");
			document.getElementById("status").innerHTML = "Bienvenue!";
		} else {
			document.getElementById("status").innerHTML =
				"Veuillez vous connecter.";
		}
	}
	checkUserLoginStatus() {
		FB.getLoginStatus((response) => {
			this.#statusChangeCallback(response);
		});
	}
	logout() {
		FB.logout(() => {
			this.checkUserLoginStatus();
            this.toggleVisibility("facebook-login-btn");
			this.toggleVisibility("facebook-logout-btn");
		});
	}

	login() {
		FB.login((response) => {
			this.#statusChangeCallback(response);
		});
	}

    toggleVisibility(elementId){
        const element = document.getElementById(elementId);
        element.className.match("d-none") ? element.classList.replace("d-none", "d-flex") : element.classList.replace("d-flex", "d-none");
    }
}