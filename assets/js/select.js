document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".custom-select").forEach(select => {
        const selected = select.querySelector(".selected");
        const options = select.querySelector(".options");
        const optionItems = select.querySelectorAll(".options div");
        const arrow = select.querySelector(".arrow"); // Добавляем стрелку

        selected.addEventListener("click", function () {
            const isOpen = options.style.display === "block";
            document.querySelectorAll(".options").forEach(opt => opt.style.display = "none");
            document.querySelectorAll(".selected").forEach(sel => sel.classList.remove("active"));
            document.querySelectorAll(".arrow").forEach(arrow => arrow.classList.remove("active")); // Сбрасываем активность у всех стрелок
            
            if (!isOpen) {
                options.style.display = "block";
                selected.classList.add("active");
                arrow.classList.add("active"); // Добавляем класс активной стрелке
            }
        });

        optionItems.forEach(option => {
            option.addEventListener("click", function () {
                if (!option.isContentEditable) {
                    selected.textContent = this.textContent;
                    options.style.display = "none";
                    selected.classList.remove("active");
                    arrow.classList.remove("active"); // Убираем класс у стрелки при выборе
                }
            });
        });

        document.addEventListener("click", function (e) {
            if (!select.contains(e.target)) {
                options.style.display = "none";
                selected.classList.remove("active");
                arrow.classList.remove("active"); // Убираем класс при клике вне селекта
            }
        });
    });
});
