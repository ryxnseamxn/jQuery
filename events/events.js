// function func1(){
//     document.getElementById("img1").style.width="500px"
// }

// $("button").click(func1);
// function func1(){
//     $("#img1").css("width", "35vh")
// }


$("document").ready(function(){

    $("#img1").hover(func1, func2)

    function func1(){
        $("#img1").css("width","35vh")
    }
    function func2(){
        $("#img1").css("width","50vh")
    }

    /*
    $("#img1").mouseenter(function(){
        $("#img1").css("width","35vh")
    })
    $("#img1").mouseleave(function(){
        $("#img1").css("width","50vh")
    })
    */

    // $("button").dblclick(function(){
    //     $("#img1").css("width", "35vh")
    // })
    
})