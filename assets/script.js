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
let frequencyOutput= $(".freqBox");




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

// function for count freq btn
$(function() {
    $(".countFreq").click(function () {
        var s = frequencyOutput.val();
        var c = s.split("");
        var itemCount= {};

        for(var i=0; i< c.length; i++)
        {
            if (itemCount[c[i]] == undefined)
                    itemCount[c[i]] = 0;
                itemCount[c[i]]++;
        }
        var finalDisplay = '';
        for (var i in itemCount)
        {
            console.log(i + "=" + itemCount[i]);
            finalDisplay += i + "=" + itemCount[i];
        }
        frequencyOutput.val(finalDisplay);        
    })
    
});