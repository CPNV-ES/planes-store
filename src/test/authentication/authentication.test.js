const Authentication = require("../../models/Authentication");
const FBConnector = require("../../models/FBConnector");

describe("When Authentication is used with facebook connector", () => {
	describe("When testing model formatted response", () => {
		describe("When authentication authorize connection", () => {
			let auth;
			beforeEach(() => {
				auth = new Authentication(new FBConnector());
			});
			it("should log in the user", () => {
				// Given
				// User is not logged in

				// When
				// User clicks has clicked on the login button and has entered the correct credentials
				auth.login();

				// Then
				// User is logged in
				expect(auth.isUserLoggedIn()).toBe(true);
			});
			it("should log out the user which is logged in", () => {
				// Given
				// User is logged in
				auth.login();

				// When
				// User clicks on the logout button
				auth.logout();

				// Then
				// User is logged out
				expect(auth.isUserLoggedIn()).toBe(false);
			});
		});
		describe("When authentication do not authorize connection", () => {
			let auth;
			beforeEach(() => {
				auth = new Authentication(new FBConnector());
			});
			it("should not log in the user", () => {
				// Given
				// User is not logged in

				// When
				// User has clicked on the login button and has entered the wrong credentials

				// Then
				// User is not logged in
				expect(auth.isUserLoggedIn()).toBe(false);
			});
		});
	});
	describe("When testing view formatted response", () => {
		describe("When user clicks on the facebook login button", () => {
			let auth;
			beforeEach(() => {
				auth = new Authentication(new FBConnector());
			});
			it("should log in the user if the credentials are correct", () => {
				// Given
				// User is not logged in

				// When
				// User clicks has clicked on the login button and has entered the correct credentials
				let res = auth.login();

				// Then
				// User is logged in
				expect(res).toBe({
					status: "connected",
					message: "Successfully logged in",
				});
			});
			it("should not log in the user if the credentials are wrong", () => {
				// Given
				// User is not logged in

				// When
				// User clicks has clicked on the login button and has entered the wrong credentials
				let res = auth.login();

				// Then
				// User is not logged in
				expect(res).toBe({
					status: "not connected",
					message: "Credentials are wrong",
				});
			});
		});
		describe("When user clicks on the facebook logout button", () => {
			let auth;
			beforeEach(() => {
				auth = new Authentication(new FBConnector());
			});
			it("should log out the user", () => {
				// Given
				// User is logged in
				auth.login();

				// When
				// User clicks on the logout button
				let res = auth.logout();

				// Then
				// User is logged out
				expect(res).toBe({
					status: "not connected",
					message: "Successfully logged out",
				});
			});
		});
	});
});
