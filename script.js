function displayPassword() {
  const change = document.getElementById("password");
  let icon = document.getElementById("showPassword");

  if (change.type === "password") {
    change.type = "text";
    icon.innerHTML =
      '<i  onmouseleave="displayPassword()"  class="bi bi-eye-fill"></i>';
    // icon.innerHTML = '<i class="bi bi-eye-slash-fill"></i>'
  } else {
    change.type = "password";
    icon.innerHTML =
      '<i  onmouseenter="displayPassword()" class="bi bi-eye-slash-fill"></i>';
    // icon.innerHTML = '<i  class="bi bi-eye-fill"></i>'
  }
}
const press = document.getElementById("password");
press.addEventListener("keyup", () => {
  if (press.value != "") {
    document.getElementById("ensure").style.opacity = "1";
  } else {
    document.getElementById("ensure").style.display = "none";
  }
});

function changeFirst() {
  const change = document.getElementById("password");
  const firstChange = document.getElementById("firstChange");
  if (change.value.length <= 8) {
    firstChange.innerHTML = '<i class="bi bi-check-circle-fill tick"></i>';
  } else {
    firstChange.innerHTML = '<i class="bi bi-x-circle-fill"></i>';
  }
}
changeFirst();
function changeSecond() {
  const change = document.getElementById("password");
  const firstChange = document.getElementById("firstChange");
  if (change.value === "string") {
    firstChange.innerHTML.add =
      '<i   class="bi bi-check-circle-fill tick"></i>';
    firstChange.innerHTML.remove = '<i class="bi bi-x-circle-fill"></i>';
  } else {
    firstChange.innerHTML = '<i class="bi bi-x-circle-fill"></i>';
  }
}
changeSecond();