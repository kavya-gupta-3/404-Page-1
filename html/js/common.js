// JavaScript Document
$(document).ready(function() {
    function calcHeight() {

        windowHeight = $(window).height();

        $('.page-notfound-section').css({

            'height': windowHeight + 'px'

        });

    }

    $(window).load(function() {

        calcHeight();

    });

    $(window).resize(function() {

        calcHeight();

    });

});