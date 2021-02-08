$(function(){

$(".button.aa").click(function(){
    $(".position.A").animate({width: 'toggle'});
});
$(".button.bb").click(function(){
    $(".position.B").animate({width: 'toggle'});
});
$(".button.cc").click(function(){
    $(".position.C").animate({width: 'toggle'});
});
$(".button.dd").click(function(){
    $(".position.D").slideToggle();
    
});
$(".button.ee").click(function(){
    $(".position.E").slideToggle();
    
});

$(".button.aa").click(function(){
    $(".position.B h2").toggle();
    $(".position.B p").html("<h1>Machine Knitting Samples</h1>").toggle();

    $(".position.C h2").toggle();
    $(".position.C p").html("Fall 2018, all samples done on a single bed knitting machine.").toggle();

});

$(".button.bb").click(function(){
    $(".position.A h2").toggle();
    $(".position.A p").html("<h1>Hand Woven Samples</h1>").toggle();

    $(".position.C h2").toggle();
    $(".position.C p").html("Spring 2019, all samples done on a 8-harness hand loom.").toggle();

});

$(".button.cc").click(function(){
    $(".position.B h2").toggle();
    $(".position.B p").html("Fall 2019, all samples done on 24-harness dobby loom.").toggle();

    $(".position.A h2").toggle();
    $(".position.A p").html("<h1>Dobby Woven Samples </h1>").toggle();

});

$(".button.dd").click(function(){
    $(".position.C h2").toggle();
    $(".position.C p").html("<h1>Sculptural Stocking</h1>").toggle();

    $(".position.E h2").toggle();
    $(".position.E p").html("Fall 2018, inspired by the scales on reptiles, the fabric is made using monofilament, thin cotton and metallic thread to create a second skin. Alternating picot hems are used to slice up moments of exposure down the leg of the wearer. In obscuring the hips, knees and feet on the body, the stocking transforms the traditional silhouette.").toggle();
});

$(".button.ee").click(function(){
    $(".position.D h2").toggle();
    $(".position.D p").html("<h1>Project: Day in the Life of, a Study of Blocking</h1>Spring 2019, using one fixed design screen and one blank screen. The prints focus on color choice and blocking techniques.").toggle();
});

});
