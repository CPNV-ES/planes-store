import "./login.scss";
import $ from "jquery";
import FBConnector from "../src/models/FBConnector";

const connector = new FBConnector();

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

$("#facebook-login-btn").on("click", function () {
	connector.login();
});
$("#facebook-logout-btn").on("click", function () {
	connector.logout();
});
