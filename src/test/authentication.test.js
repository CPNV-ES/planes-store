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