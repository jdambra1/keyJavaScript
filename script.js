let text = document.getElementById("text");
let output = document.getElementById("output");
let key = document.getElementById("key");
let codeKey = document.getElementById("codeKey");
let ewhich = document.getElementById("eWhich");

text.addEventListener("keydown", (event) => {
  (key.innerHTML = event.keyCode),
    (codeKey.innerHTML = event.code),
    (ewhich.innerHTML = event.which);
});

// (event.keyCode, event.which, event.code);
