// Add event listener on-load.
const selectionClass = document.querySelectorAll(".selection");
// Add event listener to all elements.
selectionClass.forEach((selection) =>
  selection.addEventListener("click", handleSelection)
);
// Set lives
let userLives = 3;
let cpuLives = 3;

function battleResult(userSelection, cpuSelection) {
  if (userSelection == "🪨") {
    if (cpuSelection == "📃") {
      return "lose";
    } else if (cpuSelection == "✂️") {
      return "win";
    }
  } else if (userSelection == "📃") {
    if (cpuSelection == "🪨") {
      return "win";
    } else if (cpuSelection == "✂️") {
      return "lose";
    }
  } else if (userSelection == "✂️") {
    if (cpuSelection == "🪨") {
      return "lose";
    } else if (cpuSelection == "📃") {
      return "win";
    }
  } else {
    return "draw";
  }
}
function handleSelection(e) {
  // Get user selection.
  const userElement = e.target;
  const userSelection = userElement.innerHTML;
  // Get CPU selection.
  const cpuChoiceIndex = Math.floor(Math.random() * 3);
  // Show CPU random choice.
  const cpuChoiceElement =
    document.querySelectorAll(".cpu-selection")[cpuChoiceIndex];
  cpuChoiceElement.style.transform = "translatey(10rem)";

  const cpuSelection = cpuChoiceElement.innerHTML;
  // Display user choice on-screen.
  userElement.style.transform = "translatey(-10rem)";
  // Get battle result.
  const battleResultString = battleResult(userSelection, cpuSelection);
  let message = "Draw.";
  if (battleResultString == "win") {
    cpuLives--;
    document.querySelectorAll("#cpu-life-container span")[0].remove();
    message = "User wins this round.";
  } else if (battleResultString == "lose") {
    userLives--;
    document.querySelectorAll("#user-life-container span")[0].remove();
    message = "CPU wins this round.";
  }
  setTimeout(() => alert(message), 100);
  // Clear style
  setTimeout(() => {
    userElement.style.transform = "translatey(0rem)";
    cpuChoiceElement.style.transform = "translatey(0rem)";
  }, 200);

  // Detect if game finished.
  if (cpuLives === 0 || userLives === 0) {
    const message = cpuLives === 0 ? "User wins." : "CPU wins.";
    setTimeout(() => {
      alert(message);
      location.reload();
    }, 300);
  }
}
