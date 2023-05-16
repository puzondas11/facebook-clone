var settingManu = document.querySelector(".profile-drop-manu");

var darkMode = document.getElementById("dark-mode");

var profileDropManu = document.querySelector(".drop-down");

var profileRightManuBar = document.querySelector(".profile-right-drop-down");

function settingManuToggel(){
  settingManu.classList.toggle("setting-manu-hight");
}

function profileManu(){
  profileDropManu.classList.toggle("profile-drop-manu-height");
}

function profileRightManu() {
  profileRightManuBar.classList.toggle("profile-right-drop-manu-height");
}

darkMode.onclick = function(){
  darkMode.classList.toggle("dark-mode-on");
  document.body.classList.toggle("dark-theme");

  if(localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme", "dark");
  }
  else{
    localStorage.setItem("theme", "light");
  }
}

if(localStorage.getItem("theme") == "light"){
  darkMode.classList.remove("dark-mode-on");
  document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
  darkMode.classList.add("dark-mode-on");
  document.body.classList.add("dark-theme");
}
else{
  localStorage.setItem("theme", "light")
}

