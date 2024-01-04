function func1(){
    $("div").css("background-color", "orange")
    $("#p1").css("font-style","italic")
    $(".para").css("font-style","italic")
    $("#div1,#div3").css("background-color","green")
    $("#div1, li").css("background-color","purple")
    $("div > p").fadeToggle(); 
    $("p:first").fadeToggle(); 
    $("li:even").fadeToggle();
}