"use strict";

// ======================================================
// SIDEBAR TOGGLE
// This script handles opening and closing the sidebar on mobile by toggling CSS classes that we already defined in style.css.
// ======================================================

// Grab the three elements we need
const hamburger = document.querySelector(".hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebarOverlay");
const closeSideBar = document.querySelector(".closeSidebar");

// When the hamburger is clicked, open the sidebar and shwo the overlay
hamburger.addEventListener("click", function () {
  sidebar.classList.add("open");
  overlay.classList.add("show");
});

// When the overlay is clicked, close the sidebar and hide the overlay
overlay.addEventListener("click", function () {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
});

//  When the X button is clicked, close the sidebar and hide the overlay
closeSideBar.addEventListener("click", function () {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
});
