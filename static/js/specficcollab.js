register = document.getElementById("register");
  project_id = register.getAttribute("project_id");



  register.addEventListener("click", function()
  {
if(register.textContent == "Register Interest")
{
  fetch("http://127.0.0.1:5000/interest/" + project_id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function(response) {
        if (response.ok) {
          register.textContent = "Registered";
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
}
else{
 fetch("http://127.0.0.1:5000/deleteinterest/" + project_id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function(response) {
        if (response.ok) {
          register.textContent = "Register Interest";
          return response.json();
        } else {
        console.log(response)
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
      });;
    }
  });