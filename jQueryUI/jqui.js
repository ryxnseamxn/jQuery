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
    event: "mouseover"
});
})