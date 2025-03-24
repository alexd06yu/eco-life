let ecoTrackerList = [];

function newsletterSubmit(event) {
  event.preventDefault();

  const messageDiv = document.getElementById("message-div");
  const message = document.getElementById("submission-message");

  message.innerHTML = "Thank you for signing up!";
  messageDiv.style.display = "block";

  /* Here are 2 setTimout(). The first one waits 10 seconds,
   * and then plays the fadeOut animation.
   * The second one waits 1 second for the animation to finish,
   * and then displays the div as none. */
  setTimeout(() => {
    // Start fade out animation.
    message.classList.add("fade-out");
    setTimeout(() => {
      // Fade out animation is done, time to remove the message.
      messageDiv.style.display = "none";
      message.classList.remove("fade-out");
      message.innerHTML = "";
    }, 1000); // These are the time parameters for setTimeout()
  }, 10000);

}

function trackerSubmit(event) {
  event.preventDefault();

  const date = document.getElementById('date').value;
  const electricity = document.getElementById('electricity').value;
  const gasoline = document.getElementById('gasoline').value;

  const itemsDiv = document.getElementById("tracked-items");
  const newItem = document.createElement("p");

  newItem.innerHTML = `Date ${date}<br>Electricity Consumption: ${electricity}<br>Gasoline Consumption: ${gasoline}`;
  newItem.classList.add("tracked-item");
  itemsDiv.appendChild(newItem);
}
