const gpc_status_text = document.getElementById("status-text");
const status_dot = document.getElementsByClassName("status-dot")[0];

let statusClass, statusText, statusColor;

// Check for globalPrivacyControl status
if (navigator.globalPrivacyControl) {
  statusClass = "status-dot--green";
  statusColor = "#058A5E";
  statusText =
    "Good news, you're already sending the <a href='https://global-privacy-control.glitch.me/'>GPC signal</a>";
} else {
  statusClass = "status-dot--red";
  statusColor = "#de0000";
  statusText =
    "You're currently not sending the <a href='https://global-privacy-control.glitch.me/'>GPC signal</a>. Please <a href='#download'>download a browser/extension that supports it</a>, and make sure to enable it to signal your privacy preference.";
}

// Update status bar
status_dot.classList.add(statusClass);
status_dot.style.backgroundColor = statusColor;
gpc_status_text.innerHTML = statusText;
