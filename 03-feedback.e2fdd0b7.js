!function(){var t=document.querySelector("input");console.log(t);var e=document.querySelector("textarea");console.log(e),t.addEventListener("input",(function(e){console.log(t.value);var o={input:"${input.value}"};return localStorage.setItem("inputDataEmail",JSON.stringify(o)),console.log(o)})),e.addEventListener("input",(function(t){var e={input:"${textArea.value}"};return localStorage.setItem("inputDataText",JSON.stringify(e)),console.log(e)}));var o=localStorage.getItem("inputDataEmail"),n=JSON.parse(o);console.log(n);var l=document.querySelector("button");console.log(l),l.addEventListener("click",(function(n){localStorage.clear(),t.textContent="",e.textContent="",console.log(o)}))}();
//# sourceMappingURL=03-feedback.e2fdd0b7.js.map
