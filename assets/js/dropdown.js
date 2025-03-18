document.addEventListener("DOMContentLoaded", function () {
    const menuTrigger = document.querySelector(".call-menu-dropdown");
    const dropdownMenu = document.querySelector(".dropdown");

    if (menuTrigger && dropdownMenu) {
        menuTrigger.addEventListener("click", function (event) {
            event.stopPropagation(); // Останавливаем всплытие
            const isActive = dropdownMenu.classList.toggle("active");
            menuTrigger.classList.toggle("active", isActive);
        });

        // Закрытие по клику вне меню
        document.addEventListener("click", function (event) {
            if (!dropdownMenu.contains(event.target) && !menuTrigger.contains(event.target)) {
                dropdownMenu.classList.remove("active");
                menuTrigger.classList.remove("active");
            }
        });
    }
});
