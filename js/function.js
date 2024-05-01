function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
  setTimeout(() => {
    sidebar.style.transform = "translateX(0)";
  }, 10);
}

function closeSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.transform = "translateX(100%)";
  setTimeout(() => {
    sidebar.style.display = "none";
  }, 300);
}

const sidebar_subNavMenu_btn = document.querySelector(
  ".sidebar-subNavMenu-btn"
);
const sidebar_subNavMenu_dropdown = document.querySelector(
  ".sidebar-subNavMenu-dropdown"
);
const sidebar_subNavMenu_btn_caret = document.querySelector(
  ".sidebar-subNavMenu-btn-caret"
);
sidebar_subNavMenu_btn.addEventListener("click", () => {
  sidebar_subNavMenu_dropdown.classList.toggle(
    "sidebar-subNavMenu-dropdown-open"
  );
  if (
    sidebar_subNavMenu_dropdown.classList.contains(
      "sidebar-subNavMenu-dropdown-open"
    )
  ) {
    sidebar_subNavMenu_btn_caret.innerHTML = `<i class="fas fa-caret-up"></i>`;
  } else {
    sidebar_subNavMenu_btn_caret.innerHTML = `<i class="fas fa-caret-down"></i>`;
  }
});

// Scroll to top
const scroll_to_top = document.querySelector(".scroll_to_top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= window.innerHeight / 2) {
    scroll_to_top.classList.add("scroll_to_top_show");
  } else {
    scroll_to_top.classList.remove("scroll_to_top_show");
  }
});

scroll_to_top.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
