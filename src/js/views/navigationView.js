class NavigationView {
  constructor() {
    const tabs = document.querySelectorAll(".navigation__tab");
    const tabsContainer = document.querySelector(".navigation__tab-container");
    const tabsContent = document.querySelectorAll(".navigation__content");
    const searchContent = document.querySelector(".results");
    const paginationBtns = document.querySelector(".pagination");

    tabsContainer.addEventListener("click", function (e) {
      const clicked = e.target.closest(".navigation__tab");

      if (!clicked) return;

      // Remove active classes
      tabs.forEach((tab) => tab.classList.remove("navigation__tab--active"));
      tabsContent.forEach((cont) =>
        cont.classList.remove("navigation__content--active")
      );

      // Activate navigation tab
      clicked.classList.add("navigation__tab--active");

      // Activate sections content
      document
        .querySelector(`.navigation__content--${clicked.dataset.tab}`)
        .classList.add("navigation__content--active");

      // Hide finder results when clicking other navigation tabs
      +clicked.dataset.tab !== 2
        ? searchContent.classList.remove("results--active")
        : searchContent.classList.add("results--active");

      +clicked.dataset.tab !== 2
        ? paginationBtns.classList.remove("pagination--active")
        : paginationBtns.classList.add("pagination--active");
    });
  }
}

export default new NavigationView();
