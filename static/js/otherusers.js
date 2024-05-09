
var search = document.getElementById("search");
search.addEventListener("click", function()
{
event.preventDefault();
var text = document.getElementById("text").value;


 window.location.href = "http://127.0.0.1:5000/searchprofile/" + text;


});




var followButtons = document.querySelectorAll(".btn.btn-primary"); // Select all buttons with class "btn" and "btn-primary"

followButtons.forEach(function(button) {
  var user_id = button.getAttribute("user-id");
  button.addEventListener("click", function() {
    fetch("http://127.0.0.1:5000/follow/" + user_id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function(response) {
        if (response.ok) {
          button.textContent = "Followed";
          return response.json();
        } else {
          throw new Error("Error: " + response.status);
        }
      })
      .then(function(data) {
        if (data && data.message) {
          console.log(data.message);
        } else {
          throw new Error("Invalid response data");
        }
      })
      .catch(function(error) {
        console.error(error);
      });
  });
});