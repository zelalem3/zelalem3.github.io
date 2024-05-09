 var unfollowButtons = document.querySelectorAll(".unfollow-btn");

unfollowButtons.forEach(function(button) {

  button.addEventListener("click", function() {
  var user_id = button.getAttribute("user-id");
    fetch("http://127.0.0.1:5000/unfollow/" + user_id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function(response) {
        if (response.ok) {
          button.textContent = "Follow";
          return response.json();
        } else {
          throw new Error("Error: " + response.status);
        }
      })
      .then(function(data) {
        if (data && data.message) {
          console.log(data.message);
           button.textContent = "Follow";
        } else {
          throw new Error("Invalid response data");
        }
      })
      .catch(function(error) {
        console.error(error);
      });
  });
});