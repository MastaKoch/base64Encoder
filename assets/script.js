// variables defined here vv
let encode= $(".encode");
let decode= $(".decode");
let output= $(".contentBox");




// function for encode btn
$(function() {
    $(".encode").click(function () {
        output.val(btoa(output.val()));

    })
});

// function for decode btn
$(function() {
    $(".decode").click(function () {
        output.val(atob(output.val()));

    })
});
