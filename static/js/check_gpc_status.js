const gpc_status_text = document.getElementById("status-text");
const status_dot = document.getElementsByClassName("status-dot")[0];

let statusClass, statusText, statusColor;

// Check for globalPrivacyControl status
if (navigator.globalPrivacyControl) {
  statusClass = "status-dot--green";
  statusColor = "#058A5E";
  statusText =
    "Good news, GPC signal detected.<br>Click <a href='https://global-privacy-control.glitch.me'>here</a> to test against the reference server.";
} else {
  statusClass = "status-dot--red";
  statusColor = "#de0000";
  statusText =
    "GPC signal not detected.<br>Please <a href='#download'>download a browser or extension that supports it</a>.";
}

// Update status bar
status_dot.classList.add(statusClass);
status_dot.style.backgroundColor = statusColor;
gpc_status_text.innerHTML = statusText;
