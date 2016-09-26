'use strict';

$(function () {
    $("#js-shopping-list-form").submit(function (event) {
        event.preventDefault();

        var itemName = $("#shopping-list-entry").val();
        var elemHTML = '\
        <li>\
            <span class="shopping-item">' + itemName + '</span>\
            <div class="shopping-item-controls">\
            <button class="shopping-item-toggle">\
                <span class="button-label">check</span>\
            </button>\
            <button class="shopping-item-delete">\
                <span class="button-label">delete</span>\
            </button>\
            </div>\
        </li>';
        $(".shopping-list").append(elemHTML);
        $("#shopping-list-entry").val("");
        $("#shopping-list-entry").focus();
    });

    $(".shopping-list").on("click", ".shopping-item-delete", function (event) {
        $(this).closest("li").remove();
    });

    $(".shopping-list").on("click", ".shopping-item-toggle", function (event) {
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    })
});