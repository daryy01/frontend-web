import {
  backendURL,
  successNotification,
  errorNotification,
} from "../utils/utils.js";

//Form Login
const form_login = document.getElementById("form_login");
form_login.onsubmit = async (e) => {
  e.preventDefault();

  document.querySelector("#form_login button").disabled = true;

  const formData = new FormData(form_login);

  const response = await fetch(backendURL + "/api/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  if (response.ok) {
    const json = await response.json();
    console.log(json);

    localStorage.setItem("token", json.token);

    form_login.reset();

    successNotification("Successfully logged in account", 5);
  } else if (response.status == 422) {
    const json = await response.json();

    errorNotification(json.message, 5);
  }

  document.querySelector("#form_login button").disabled = false;

  window.location.pathname = "/home.html";
};
