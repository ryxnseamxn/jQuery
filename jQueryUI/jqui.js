let language = ["HTML", "CSS", "Javascript", "php" ,"python", "java", "go", "swift", "kotlin", "C", "C++", "C#", "Perl", "Fortran", "Ruby", "Rust"]

$("document").ready(function(){
$("#date").datepicker({
    showOtherMonths: true, 
    selectOtherMonths: true, 
    showButtonPanel: true,
    changeMonth: true, 
    changeYear: true,
    minDate: new Date(2016, 1, 15),
    maxDate: new Date(2024, 4, 15),
    numberOfMonths: 3
});
$("#tool").tooltip({
    track: true,
    content:"This is not a hot dog :(",
    show:{effect:"pulsate"},
    hide:{effect:"explode"}
}); 
$("#div2").accordion({
    collapsible: true,
    icons:{header: "ui-icon-caret-1-s", activeHeader: "ui-icon-caret-1-n"},
});
$("#btn1").click(function(){
    $("#dialog").dialog("open");
})
$("#dialog").dialog({
    title: "Title using jquery",
    draggable: true,
    resizable: false,
    closeOnEscape: false,
    modal: true,
    autoOpen: false
})
$("#input").autocomplete({source: language},{ autoFocus: true})
$("#dialog").dialog({
    draggable: true,
    resizable: true, 
    closeOnEscape: true,
    model: false,
    autoOpen: true
})
$("#btn3").click(function(){
    //alert("Get is working")
    let draggable = $("#dialog").dialog("option", "draggable")
    alert(draggable)
})
$("#btn4").click(function(){
    //alert("Set is working")
    $("#dialog").dialog("option", "draggable", false)
})
})