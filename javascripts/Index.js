/*
ToolTip="tooltip"
^^^^^^^^^^^^^
To use a ToolTip
*/

$("[tooltip='size']").tooltip({
Hide: {
effect: "size",
delay: 250
}
content: function () {
return ( ( $( this ).prop( 'title' ).replace( '|', '<br />' ) ) );
});
  
$("[ToolTip='normal']").tooltip({
content: function () {
return ( ( $( this ).prop( 'title' ).replace( '|', '<br />' ) ) );
}
show: {
effect: "slowDown",
delay: 250
}
});
  
  
$("[ToolTip='fade']").tooltip({
content: function () {
return ( ( $( this ).prop( 'title' ).replace( '|', '<br />' ) ) );
}
show: {
effect: "fade",
delay: 250
}
});
$("[ToolTip='fade']").tooltip({
content: function () {
return ( ( $( this ).prop( 'title' ).replace( '|', '<br />' ) ) );
}
hide: {
effect: "fade",
delay: 125
}
});
  
  
$("[ToolTip='slide']").tooltip({
content: function () {
return ( ( $( this ).prop( 'title' ).replace( '|', '<br />' ) ) );
}
show: {
effect: "slide",
delay: 250
}
});
$("[ToolTip='slide']").tooltip({
content: function () {
return ( ( $( this ).prop( 'title' ).replace( '|', '<br />' ) ) );
}
hide: {
effect: "slide",
delay: 250
}
});
  
$("[ToolTip='explode']").tooltip({
content: function () {
return ( ( $( this ).prop( 'title' ).replace( '|', '<br />' ) ) );
}
hide: {
effect: "explode",
delay: 250
}
});
  
$("[ToolTip='blind']").tooltip({
content: function () {
return ( ( $( this ).prop( 'title' ).replace( '|', '<br />' ) ) );
}
show: {
effect: "blind",
delay: 250
}
});
$("[ToolTip='blind']").tooltip({
content: function () {
return ( ( $( this ).prop( 'title' ).replace( '|', '<br />' ) ) );
}
hide: {
effect: "blind",
delay: 250
}
});
  
$("[ToolTip='fold']").tooltip({
content: function () {
return ( ( $( this ).prop( 'title' ).replace( '|', '<br />' ) ) );
}
hide: {
effect: "fold",
delay: 250
}
});
   
$("[ToolTip='puff']").tooltip({
content: function () {
return ( ( $( this ).prop( 'title' ).replace( '|', '<br />' ) ) );
}
hide: {
effect: "puff",
delay: 250
}
});
$("[ToolTip='puff']").tooltip({
content: function () {
return ( ( $( this ).prop( 'title' ).replace( '|', '<br />' ) ) );
}
show: {
effect: "puff",
delay: 250
}
});
  
$("[ToolTip='pulsate']").tooltip({
content: function () {
return ( ( $( this ).prop( 'title' ).replace( '|', '<br />' ) ) );
}
hide: {
effect: "pulsate",
delay: 250
}
});
$("[ToolTip='pulsate']").tooltip({
content: function () {
return ( ( $( this ).prop( 'title' ).replace( '|', '<br />' ) ) );
}
show: {
effect: "pulsate",
delay: 250
}
});
  
});
