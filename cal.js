let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
        string = eval(string);
        document.querySelector("input").value = string;
    }
     else if (e.target.innerHTML === "AC") {
      string = '';
      document.getElementById("my-c-1-1").value = string;
    }
    else if (e.target.innerHTML === "⌫") {
      string = String(string).slice(0, -1);
      document.getElementById("my-c-1-1").value = string;
    }
     else {
      console.log(e.target);
      string = string + e.target.innerHTML;

      document.getElementById("my-c-1-1").value = string;
    }
  });
});
