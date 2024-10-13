function dontcloseTab() {
  alert("You just got skibidid");
  window.close();
  window.open("index2.html", "_blank");
}

function closeTab() {
  window.close();
}

function Skibidibutton() {
  alert(
    "NOT!! Foolish fool spouting foolish foolishness, just as I expect of a foolish fool such as you.our foolish attempts to fool us like foolish fools is so fool-heartedly foolish!,"
  );
  alert("click the left button infact");
}

function Goodbutton() {
  window.close();
  window.open("index3.html", "_blank");
}

function correctAnswer1() {
  document.getElementById("Q1").innerText =
    "Q2: Which one of these is Kai Cenat?";

  document.getElementById("idquestion1").style.display = "none";
  document.getElementById("idquestion2").style.display = "block";
}

function incorrectAnswer1() {
  alert("Incorrect answer, Please try again");
}

function correctAnswer2() {
  document.getElementById("Q1").innerText =
    "Q3: Which one of these is the original aura";

  document.getElementById("idquestion2").style.display = "none";
  document.getElementById("idquestion3").style.display = "block";
}

function incorrectAnswer2() {
  alert("Incorrect answer, Please try again");
}

function correctAnswer3() {
  document.getElementById("Q1").innerText = "";

  document.getElementById("idquestion3").style.display = "none";
  alert("Good job... You have passed. Now you are presented with the reward");

  document.getElementById("Rewards").style.display = "block";
}

function incorrectAnswer3() {
  alert("Incorrect answer, Please try again");
}
