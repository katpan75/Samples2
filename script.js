$(function(){
$(".element.about").click(function(){
    window.location="about/about.html";
});
$(".element.knitting1").click(function(){
    window.location="knittingone/knit.html";
});
$(".element.weaving1").click(function(){
    window.location="weavingone/weave.html";
});
$(".element.dobby").click(function(){
    window.location="dobbyweaving/dobby.html";
});
$(".element.pants").click(function(){
    window.location="others/stocking.html";
});
$(".element.venice").click(function(){
    window.location="others/venice.html";
});
$(".element.lichen").click(function(){
    window.location="others/lichen.html";
});
let x=0;
$.getJSON("bg.json", function(data){
    console.log(x);
    $(".element.name").click(function(){
    if(x==0){
        $(".container").css("background-image", data.background[x].image);
        $(".element").css("border-color", data.background[x].border);
        x=1;
        console.log(x);}
    else if(x==1){
        $(".container").css("background-image", data.background[x].image);
        $(".element").css("border-color", data.background[x].border);
        x=0;
        console.log(x);
        }
    });
})



});
