$("document").ready(function(){
    $(".box").draggable({
        //axis: "x", 
        cursor: "grabbing",
        opacity: "0.5",
        //containment: "parent",
        //grid:[300,300],
        snap: true,
        snapTolerance: 15
    })
})