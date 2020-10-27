import "./shared.js";

import "../css/faq.scss";

import "./check_gpc_status.js";




var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    this.querySelector("#down").classList.toggle("d-none");
    this.querySelector("#right").classList.toggle("d-none");

    if (content.style.maxHeight){
      content.style.maxHeight = null;


    } else {

      content.style.maxHeight = content.scrollHeight + "px";

    }
  });
}