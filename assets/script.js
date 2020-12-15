// variables defined here vv
let encode= $(".encode");
let decode= $(".decode");
let encodeDecodeOutput= $(".encodeDecodeBox");
let upper= $(".upper");
let lower= $(".lower");
let upperLowerOutput= $(".upperLowerBox");
let add= $(".add");
let sub=$(".sub");
let addSubOutput= $(".numberBox");




// function for encode btn
$(function() {
    $(".encode").click(function () {
        encodeDecodeOutput.val(window.btoa(encodeDecodeOutput.val()));

    })
});

// function for decode btn
$(function() {
    $(".decode").click(function () {
        encodeDecodeOutput.val(window.atob(encodeDecodeOutput.val()));

    })
});

// function for uppercase btn
$(function() {
    $(".upper").click(function () {
        var s =upperLowerOutput.val();
        upperLowerOutput.val(s.toUpperCase());

    })
});

// function for lowercase btn
$(function() {
    $(".lower").click(function () {
        var l= upperLowerOutput.val();
        upperLowerOutput.val(l.toLowerCase());

    })
});

// function for increment btn
$(function() {
    $(".add").click(function () {
        let a = addSubOutput.val();
        let b = parseInt(a)+ 1;
        addSubOutput.val(b);
    })
});

// function for decrement btn
$(function() {
    $(".sub").click(function () {
        let c = addSubOutput.val();
        let d = parseInt(c)- 1;
        addSubOutput.val(d);
    })
});