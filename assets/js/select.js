document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".custom-select").forEach(select => {
        const selected = select.querySelector(".selected");
        const options = select.querySelector(".options");
        const optionItems = select.querySelectorAll(".options div");

        selected.addEventListener("click", function () {
            const isOpen = options.style.display === "block";
            document.querySelectorAll(".options").forEach(opt => opt.style.display = "none");
            document.querySelectorAll(".selected").forEach(sel => sel.classList.remove("active"));
            
            if (!isOpen) {
                options.style.display = "block";
                selected.classList.add("active");
            }
        });

        optionItems.forEach(option => {
            option.addEventListener("click", function () {
                if (!option.isContentEditable) {
                    selected.textContent = this.textContent;
                    options.style.display = "none";
                    selected.classList.remove("active");
                }
            });
        });

        document.addEventListener("click", function (e) {
            if (!select.contains(e.target)) {
                options.style.display = "none";
                selected.classList.remove("active");
            }
        });
    });
});