
function loadPage7() {
  document.getElementById("iframe11").src = "https://www.vinted.it/member/251534611";
}

function loadPage8() {
  document.getElementById("iframe11").src = "https://ko-fi.com/brev04";
}

function loadPage13() {
  document.getElementById("iframe11").src = "https://buymeacoffee.com/pandino";
}

function loadPage18() {
  document.getElementById("iframe11").src = "https://www.cbr.com/category/anime-news/";
}




function addMessage() {
  const text = document.getElementById("text11").value.trim();
  if (text === "") return;

  // Get all containers
  const containers = document.querySelectorAll(".msg-container");

  // Get ONLY empty containers
  const emptyContainers = Array.from(containers).filter(
    c => c.children.length === 0
  );

  // If none are empty → show error
  if (emptyContainers.length === 0) {
    alert("All message slots are full. Try again later.");
    return;
  }

  // Pick a random empty container
  const randomContainer =
    emptyContainers[Math.floor(Math.random() * emptyContainers.length)];

  // Create message
  const messageDiv = document.createElement("div");
  messageDiv.className = "message";
  messageDiv.textContent = text;

  randomContainer.appendChild(messageDiv);
  document.getElementById("text11").value = "";

  const visibleTime=30000;

  // Remove after 50 seconds
  setTimeout(() => {
    messageDiv.classList.add("pop-out");

    const handleAnimationEnd=(e) => {
      if(e.animationName === "popOut"){
        messageDiv.remove();
      }
    };

    messageDiv.addEventListener("animationend", handleAnimationEnd, {once: true});

    
  }, visibleTime);   
}





const textArea = document.getElementById("text11");
const charNotice = document.getElementById("charNotice");
const maxChars = 50;

textArea.addEventListener("input", () => {
  const currentLength = textArea.value.length;

  if (currentLength >= maxChars) {
    charNotice.textContent = "50/50";
  } else {
    charNotice.textContent = `${currentLength}/${maxChars} characters`;
  }
}
);

textArea.addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    e.preventDefault();
    addMessage();
  }
})






