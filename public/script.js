window.addEventListener('load', (event) => {
  const match = location.hash.match(/invited=(.*)/)
  if (match && match.length > 1) {
    document.getElementById("flash-wrapper").innerHTML =
    `<div id="flash">Invitation sent to ${match[1]}, check your email.</div>`
  }
});
