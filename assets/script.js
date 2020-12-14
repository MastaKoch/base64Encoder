// variables defined here vv
let encode= $(".encode");
let decode= $(".decode");
let output= $(".contentBox");




// function for encode btn
$(function() {
    $(".encode").click(function () {
        output.val(window.btoa(output.val()));

    })
});

// function for decode btn
$(function() {
    $(".decode").click(function () {
        output.val(window.atob(output.val()));

    })
});

// test comments
