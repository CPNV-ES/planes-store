import './login.scss'
import FBConnector from '../src/models/FBConnector'

const connector = new FBConnector

$(function() {
    'use strict';

    $('.form-control').on('input', function() {
        var $field = $(this).closest('.form-group');
        if (this.value) {
            $field.addClass('field--not-empty');
        } else {
            $field.removeClass('field--not-empty');
        }
    });

});