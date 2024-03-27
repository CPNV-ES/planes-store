import "https://connect.facebook.net/en_US/sdk.js";

import Connector from "./Connector";

class FBConnector extends Connector{
	constructor() {
        super()
		FB.init({
			appId: "your_app_id",
			cookie: true,
			xfbml: true,
			version: "v19.0",
		});

		FB.getLoginStatus((response) => {
			this.statusChangeCallback(response);
		});
	}
	statusChangeCallback(response) {
		if (response.status === "connected") {
            FB.api("/me", function (response) {
				console.log("Successful login for: " + response.name);
				document.getElementById("status").innerHTML =
					"Bonjour " + response.name + "!";
			});
		} else {
			document.getElementById("status").innerHTML =
				"Veuillez vous connecter.";
		}
	}
	checkLoginState() {
		FB.getLoginStatus(function (response) {
			statusChangeCallback(response);
		});
	}
	logout() {
        FB.logout(() => {
            this.checkLoginState()
        })
    }
	checkUserLoginStatus() {}
}

export default FBConnector;
