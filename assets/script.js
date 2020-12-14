// variables defined here vv
let encode= $(".encode");
let decode= $(".decode");
let output= $(".contentBox");
let upper= $(".upper");
let lower= $(".lower");
let input= "";




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

// function for uppercase btn
$(function() {
    $(".upper").click(function () {
        var s = output.val();
        output.val(s.toUpperCase());

    })
});

// function for lowercase btn
$(function() {
    $(".lower").click(function () {
        var l= output.val();
        output.val(l.toLowerCase());

    })
});