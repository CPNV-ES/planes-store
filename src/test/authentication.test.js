const Authentication = require("./Authentication");

jest.mock("./Authentication");

describe("When Authentication throws an error", () => {
	beforeEach(() => {
		Authentication.mockImplementation(() => {
			return {
				login: jest.fn(),
				logout: jest.fn(),
				checkUserLoginStatus: jest.fn(() => {
					throw new Error("UserNotConnectedError");
				}),
			};
		});
	});
	it("should throw an error if the user is not connected when accessing a page that requires authentication", () => {
		// Given
		// User is not logged in
		const auth = new Authentication();

		// When
		// User tries to access a page that requires authentication

		// Then
		// An error is thrown
		expect(auth.checkUserLoginStatus).toThrowError("UserNotConnectedError");
	});
});

describe("When authentication authorize connection", () => {
	beforeEach(() => {
		Authentication.mockImplementation(() => {
			let status = "";
			return {
				login: jest.fn(() => {
					status = "connected";
				}),
				logout: jest.fn(() => {
					status = "not connected";
				}),
				checkUserLoginStatus: jest.fn(() => {
					return status;
				}),
			};
		});
	});
	it("should log in the user", () => {
		// Given
		// User is not logged in
		const auth = new Authentication();

		// When
		// User clicks has clicked on the login button and has entered the correct credentials
		auth.login();

		// Then
		// User is logged in
		expect(auth.checkUserLoginStatus()).toBe("connected");
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
		expect(auth.checkUserLoginStatus()).toBe("not connected");
	});
});

describe("When authentication do not authorize connection", () => {
	beforeEach(() => {
		Authentication.mockImplementation(() => {
			let status = "";
			return {
				login: jest.fn(() => {
					status = "not connected";
					throw new Error("UnauthorizedError");
				}),
				checkUserLoginStatus: jest.fn(() => {
					return status;
				}),
			};
		});
	});
	it("should not log in the user", () => {
		// Given
		// User is not logged in
		const auth = new Authentication();

		// When
		// User has clicked on the login button and has entered the wrong credentials

		// Then
		// User is not logged in
		expect(auth.login).toThrowError("UnauthorizedError");
		expect(auth.checkUserLoginStatus()).toBe("not connected");
	});
});
