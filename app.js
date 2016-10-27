/*
    Main script for "Gallery"
    Author: Debojyoti Ghosh
    Date: Oct 27, 2016
*/

"use strict";

$(function() {
    $("#next").on("click", next)
    $("#prev").on("click", prev)
});

function next() {
    // Get current index
    var index = $(".button-wrapper").attr("data-indexer");
    index = parseInt(index);
    // console.log(index);

    if(index >= 3) {
        // Change data-indexer attribute
        $(".button-wrapper").attr("data-indexer", index - 1);

        // Assign class names to corresponding thumbnails
        $("#thumb-" + index).attr("class", "thumbnail stack-out");
        $("#thumb-" + (index - 1)).attr("class", "thumbnail stack-top");
        $("#thumb-" + (index - 2)).attr("class", "thumbnail stack-intermediate-upper");
        $("#thumb-" + (index - 3)).attr("class", "thumbnail stack-intermediate-lower");
    }
}

function prev() {
    // Get current index
    var index = $(".button-wrapper").attr("data-indexer");
    index = parseInt(index);
    console.log('#thumb-' + (index + 1));

    if($("#thumb-" + (index + 1)).length) {
        // Change data-indexer attribute
        $(".button-wrapper").attr("data-indexer", index + 1);

        // Assign class names to corresponding thumbnails
        $("#thumb-" + (index + 1)).attr("class", "thumbnail stack-top");
        $("#thumb-" + index).attr("class", "thumbnail stack-intermediate-upper");
        $("#thumb-" + (index - 1)).attr("class", "thumbnail stack-intermediate-lower");
        $("#thumb-" + (index - 2)).attr("class", "thumbnail stack-bottom");
    }
    else {
        $("#thumb-" + (index)).addClass("shake");
        setTimeout(function() {
            $("#thumb-" + (index)).removeClass("shake");
        }, 600)
    }
}
