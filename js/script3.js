document.addEventListener("DOMContentLoaded", function () {

    const select = document.getElementById("theme_button"); 
    const html = document.querySelector("html");

  
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
        applyTheme(storedTheme);

        select.value = storedTheme;
    }

    select.addEventListener("change", function () {
        const selectedTheme = select.value;
        applyTheme(selectedTheme);
    });

    function applyTheme(theme) {
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }
});