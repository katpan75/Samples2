$(function(){
    $(".words.knittingone").hover(function(){
    console.log("hovered")
    let x = 0;

    if(x == 0){
        $(".words.knittingone").click(function() {
            $(".words.knittingone").css("visibility","hidden");
            x++;
            console.log(x);
         });
        }else if (x==1){
            $(".words.knittingone").click(function() {
                $(".words.knittingone").css("visibility","visible");
                x--;
                console.log(x);
            });
            
        }

    });
        
});

//$(".words.knittingone").css("transform","translate:(-100vw);");