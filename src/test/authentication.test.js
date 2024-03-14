const Authentication = require("../Authentication");

describe("When Authentication is used with facebook connector", () => {
	describe("When testing model formatted response", () => {
		auth = new Authentication();
		describe("When authentication authorize connection", () => {
			it("should log in the user", () => {
				// Given
				// User is not logged in
				const auth = new Authentication();
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
		it("should log out the user which is logged in", () => {
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
