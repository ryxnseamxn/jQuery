$("document").ready(function(){
    /*$(".div1").click(function(){
        let x = $(".p1").html();
        $("#span1").text(x);
    });
    $(".div1").click(function(){
        alert($(".p1").html());   
    });
    */
    // $("#btn1").click(function(){
    //     $(".div1").append("<p>This is paragraph 2</p>");
    // });
    $("#btn1").click(function(){
        $(".div1").append("<img src='../images/hotdog.png' height='100px' width='100px'>");
    });
    $("#btn2").click(function(){
        $(".div1").prepend("<img src='../images/hotdog.png' height='100px' width='100px'>");
    });
    $("#btn3").click(function(){
        $(".div1").before("<img src='../images/hotdog.png' height='100px' width='100px'>");
    });
    $("#btn4").click(function(){
        $(".div1").after("<img src='../images/hotdog.png' height='100px' width='100px'>");
    });

    // $("#btn1").click(function(){
    //    $(".div1").css("background-color","green"); 
    // });
    // $("#btn1").click(function(){
    //     $(".p1").attr("id","idp2");
    // });
    $(".p1").click(function(){
        alert($(".p1").attr("id"));
    });
    $("#btn5").click(function(){
        $(".div1").remove(); 
    });
    $("#btn6").click(function(){
        $(".div1").empty(); 
    });
    // $(".div1").click(function(){
    //     alert($(".div1").css("background-color"));
    // });


});