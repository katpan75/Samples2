$(function(){
    $(".element.name").click(function(){
        window.location="../index.html";
    });
    let x =0;
    $.getJSON("bg.json", function(data){
        console.log(x);
        $(".element.about").click(function(){
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
    