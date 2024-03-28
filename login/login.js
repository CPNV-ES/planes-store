import "./login.scss";
import $ from "jquery";
import Authentication from "../src/models/Authentication.js";
import FBConnector from "../src/models/FBConnector.js";

$(function () {
	"use strict";

	$(".form-control").on("input", function () {
		var $field = $(this).closest(".form-group");
		if (this.value) {
			$field.addClass("field--not-empty");
		} else {
			$field.removeClass("field--not-empty");
		}
	});
});
const auth = new Authentication(new FBConnector());

$("#login-button").on("click", (event) => {
	event.preventDefault();
    auth.login();
});
$("#logout-button").on("click", (event) => {
	event.preventDefault();
	auth.logout();
});
