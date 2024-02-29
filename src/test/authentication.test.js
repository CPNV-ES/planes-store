const Authentication = require("./Authentication");
const FBConnector = require("./FBConnector");

jest.mock("./Authentication");
jest.mock("./FBConnector");

FBConnector.mockImplementation(() => {
	return {
		login: () => ({
			status: "connected",
			authResponse: {
				accessToken: "{access-token}",
				expiresIn: "{unix-timestamp}",
				reauthorize_required_in: "{seconds-until-token-expires}",
				signedRequest: "{signed-parameter}",
				userID: "{user-id}",
			},
		}),
		logout: () => ({
			status: "unknown",
			authResponse: {
				accessToken: "{access-token}",
				expiresIn: "{unix-timestamp}",
				reauthorize_required_in: "{seconds-until-token-expires}",
				signedRequest: "{signed-parameter}",
				userID: "{user-id}",
			},
		}),
		checkUserLoginStatus: () => ({
			status: "connected",
			authResponse: {
				accessToken: "{access-token}",
				expiresIn: "{unix-timestamp}",
				reauthorize_required_in: "{seconds-until-token-expires}",
				signedRequest: "{signed-parameter}",
				userID: "{user-id}",
			},
		}),
	};
});

describe("When Authentication is used with facebook connector", () => {
	describe("When all requests are valid", () => {
		Authentication.mockImplementation(() => {
			const FB = new FBConnector();
			res = undefined;
			return {
				login: () => {
                    this.res = FB.login();
                    if (this.res.status !== "connected") {
                        this.res = undefined;
                        throw new Error("UnauthorizedError");
					}
					return this.res.status;
				},
				logout: () => {
					this.res = FB.logout();
				},
				isUserLoggedIn: () => {
					if (this.res?.status == "connected") {
						return true;
					} else {
						return false;
					}
				},
			};
		});
		auth = new Authentication();
		describe("When authentication authorize connection", () => {
			it("should log in the user", () => {
				// Given
				// User is not logged in
				const auth = new Authentication();

				// When
				// User clicks has clicked on the login button and has entered the correct credentials
				auth.login();

				// Then
				// User is logged in
				expect(auth.isUserLoggedIn()).toBe(true);
			});
			it("should log out the user", () => {
				// Given
				// User is logged in
				const auth = new Authentication();
				auth.login();

				// When
				// User clicks on the logout button
				auth.logout();

				// Then
				// User is logged out
				expect(auth.isUserLoggedIn()).toBe(false);
			});
		});
	});
	describe("When Authentication failed", () => {
		it("should be false if user is not logged in when accessing a page that requires authentication", () => {
			// Given
			// User is not logged in
			const auth = new Authentication();

			// When
			// User tries to access a page that requires authentication

			// Then
			// An error is thrown
			expect(auth.isUserLoggedIn()).toBe(false);
		});
	});
	describe("When authentication do not authorize connection", () => {
		it("should not log in the user", () => {
			// Given
			// User is not logged in
			const auth = new Authentication();

			// When
			// User has clicked on the login button and has entered the wrong credentials

			// Then
			// User is not logged in
			expect(auth.isUserLoggedIn()).toBe(false);
		});
	});
});
