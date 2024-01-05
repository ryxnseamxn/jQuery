$("document").ready(function(){
    $("#btn").click(function(){
        $("#img1").animate({
            left:"150px",
            opacity: ".5",
            height: "400px",
            width: "400px"
        }, "slow",function(){
            alert("Animated")
        })
    })
    $("#btn1").click(function(){
        $("#img1").slideUp(2000,function(){
            $("#img1").slideDown(2000)
        })
    })
    $("#btn2").click(function(){
        $("#img1").slideUp(2000).css("opacity",".5").slideDown(2000).fadeOut(2000).fadeIn(2000)
    })
})