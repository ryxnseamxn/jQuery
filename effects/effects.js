$("document").ready(function(){
    $("#img1").hide()
    $("#img2").hide()
    $("#img3").hide()
    $("#btn1").click(function(){
        $("#img1").hide()
    })
    $("#btn2").click(function(){
        $("#img1").show()
    })
    $("#btn3").click(function(){
        $("#img1").toggle(3000)
    })
    $("#btn4").click(function(){
        $("#img2").fadeOut(2000)
    })
    $("#btn5").click(function(){
        $("#img2").fadeIn(2000)
    })
    $("#btn6").click(function(){
        $("#img2").fadeToggle(2000)
    })
    $("#btn7").click(function(){
        $("#img3").slideUp(2000)
    })
    $("#btn8").click(function(){
        $("#img3").slideDown(2000)
    })
    $("#btn9").click(function(){
        $("#img3").slideToggle(2000)
    })
    $("#btn10").click(function(){
        $("#img3").stop()
    })
    $("#button").click(function(){
        $("#hotdog").animate({
            left:"150px",
            opacity: "1",
            height: "400px",
            width: "400px"
        },'fast')
    })
})