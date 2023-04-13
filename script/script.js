const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBox = body.querySelector(".search-box"),
    toggleSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

    // ISSO SERVE PRA MUDAR A CLASSE DO ELEMENTO SEM PERDER AS OUTRAS DIFERENTE DO CLASSNAME
toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

});

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})