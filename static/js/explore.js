    var search = document.getElementById("search");
search.addEventListener("click", function()
{
event.preventDefault();
var text = document.getElementById("text").value;


 window.location.href = "http://127.0.0.1:5000/searchblog/" + text;


});
