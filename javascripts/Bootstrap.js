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
/* what your bootstrap should look like!
<span>☰</span>
	<nav>
	 <ul>
	 <li><a>Test</a></li>
	 </ul>
	</nav>
*/
