// Button Click Event
document.getElementById("changeButton").addEventListener("click", () => {
  const btn = document.getElementById("changeButton");
  btn.textContent = "Clicked!";
  btn.style.backgroundColor = "#4CAF50";
});

// Hover Effect
document.getElementById("hoverBox").addEventListener("mouseover", () => {
  document.getElementById("hoverBox").style.backgroundColor = "pink";
});

// Keypress Detection
document.getElementById("keyInput").addEventListener("keydown", (e) => {
  console.log(`You pressed: ${e.key}`);
});

// Tabs
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach((content) => content.style.display = "none");
    document.getElementById(`tab-${tab.dataset.tab}`).style.display = "block";
  });
});

// Image Gallery
let imgIndex = 1;
document.getElementById("nextImg").addEventListener("click", () => {
  imgIndex = imgIndex === 3 ? 1 : imgIndex + 1;
  document.getElementById("galleryImg").src = `img${imgIndex}.jpg`;
});

// Form Validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("formFeedback");

  if (!/\S+@\S+\.\S+/.test(email)) {
    feedback.textContent = "Invalid email format.";
    feedback.style.color = "red";
  } else if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Form submitted successfully!";
    feedback.style.color = "green";
  }
});
