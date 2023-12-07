function setRouter() {
  alert(window.location.pathname);
  switch (window.location.pathname) {
    case "/":
    case "/index.html":
    case "/register_form.html":
      if (localStorage.getItem("token") != null) {
        window.location.pathname = "/home.html";
      }
      break;

    case "/home.html":
      if (!localStorage.getItem("token")) {
        window.location.pathname = "/index.html";
      }

    default:
      break;
  }
}

export { setRouter };
