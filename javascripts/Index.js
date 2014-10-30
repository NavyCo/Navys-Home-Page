/* ToolTips */
/*
ToolTip="tooltip"
^^^^^^^^^^^^^
To use a ToolTip
*/
$(function() {
$("[tooltip='size']").tooltip({
Hide: {
effect: "size",
delay: 250
}
});
$("[ToolTip='normal']").tooltip({
show: {
effect: "slowDown",
delay: 250
}
});
$("[ToolTip='fade']").tooltip({
show: {
effect: "fade",
delay: 250
}
});
$("[ToolTip='fade']").tooltip({
hide: {
effect: "fade",
delay: 125
}
});
$("[ToolTip='slide']").tooltip({
show: {
effect: "slide",
delay: 250
}
});
$("[ToolTip='slide']").tooltip({
hide: {
effect: "slide",
delay: 250
}
});
$("[ToolTip='explode']").tooltip({
hide: {
effect: "explode",
delay: 250
}
});
$("[ToolTip='blind']").tooltip({
show: {
effect: "blind",
delay: 250
}
});
$("[ToolTip='blind']").tooltip({
hide: {
effect: "blind",
delay: 250
}
});
$("[ToolTip='fold']").tooltip({
hide: {
effect: "fold",
delay: 250
}
});
$("[ToolTip='puff']").tooltip({
hide: {
effect: "puff",
delay: 250
}
});
$("[ToolTip='puff']").tooltip({
show: {
effect: "puff",
delay: 250
}
});
$("[ToolTip='pulsate']").tooltip({
hide: {
effect: "pulsate",
delay: 250
}
});
$("[ToolTip='pulsate']").tooltip({
show: {
effect: "pulsate",
delay: 250
}
});
$("[ToolTip='clip']").tooltip({
hide: {
effect: "clip",
delay: 250
}
});
$("[ToolTip='clip']").tooltip({
show: {
effect: "clip",
delay: 250
}
});
});

$("span").click(function() {
$("nav").toggleClass("active");
$("li").toggleClass("active");
if($(this).text() == "☰") {
$(this).text("×");
}
else {
$(this).text("☰");
}
});
alert('test')
