/* Created by Tivotal */

let links = document.querySelectorAll("a");

let currentLoc = location.href;

for (let i = 0; i < links.length; i++) {
  if (links[i].href === currentLoc) {
    links[i].classList.add("active");
  }
}
