
function nextPage(num) {
    // Change the window location to page2.html
   if (num == 1) window.location.href = "page2.html";
   if (num == 2 ) window.location.href = "page3.html";
   if (num == 3 ) window.location.href = "page4.html";
}


document.getElementById("nextPage").addEventListener("click", nextPage);

function previousPage(num) {
    if (num == 1 ) window.location.href = "index.html";
    if (num == 2) window.location.href = "page2.html"
    if (num == 3) window.location.href = "page3.html"

}

document.getElementById("previousPage").addEventListener("click", previousPage);

