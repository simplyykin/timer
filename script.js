function getTimeElapsed() {
  const currentTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
  const targetTime = new Date("05/24/2023 7:24 PM").toLocaleString("en-US", { timeZone: "America/New_York" });

  const currentDateTime = new Date(currentTime);
  const targetDateTime = new Date(targetTime);

  const timeDifference = Math.abs(targetDateTime - currentDateTime);

  const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const seconds = Math.floor((timeDifference / 1000) % 60);

  return { hours, minutes, seconds };
}

function updateTimer() {
  const timerElement = document.getElementById("timer");
  const { hours, minutes, seconds } = getTimeElapsed();

  timerElement.innerHTML = `
    <div>${hours} hours</div>
    <div>${minutes} minutes</div>
    <div>${seconds} seconds</div>
  `;
}

// Update the timer every second
setInterval(updateTimer, 1000);