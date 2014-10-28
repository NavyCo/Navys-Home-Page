$("span").click(function() {
  $("nav").toggleClass("active");
  $("li").toggleClass("active");
  if($(this).text() == "☰") {
    $(this).text("×");
  }
  else {
    $(this).text("☰");
  }
})
var t1 = "<span>☰</span>";
var t2 = "<nav>";
var t3 = " <ul>";
var t4 = " <li><li class='fa fa-refresh'></li></li>"
var t5 = " </ul>";
var t6 = "</nav>";
$("#bootstrap").append(t1);
$("#bootstrap").append(t2);
$("#bootstrap").append(t3);
$("#bootstrap").append(t4);
$("#bootstrap").append(t5);
$("#bootstrap").append(t6);
// Make a div at the top named "bootstrap" (id)
