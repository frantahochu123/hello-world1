document.addEventListener("DOMContentLoaded", () => {
    const generateColorBtn = document.getElementById("generateColorBtn");
    const saveColorBtn = document.getElementById("saveColorBtn");
    const colorDisplay = document.getElementById("colorDisplay");
    const hexCode = document.getElementById("hexCode");
    const favoritesList = document.getElementById("favoritesList");
 
    const generateRandomColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        return `#${randomColor}`;
    };
 
    const displayColor = (color) => {
colorDisplay.style.backgroundColor = color;
        hexCode.textContent = color;
    };
 
    const saveColor = (color) => {
        let favoriteColors = JSON.parse(localStorage.getItem("favoriteColors")) || [];
        if (!favoriteColors.includes(color)) {
            if (favoriteColors.length < 10) {
                favoriteColors.push(color);
                localStorage.setItem("favoriteColors", JSON.stringify(favoriteColors));
                displayFavoriteColors();
            } else {
                alert("Maximum number of favorite colors reached.");
            }
        } else {
            alert("Color is already in favorites.");
        }
    };
 
    const displayFavoriteColors = () => {
        favoritesList.innerHTML = '';
        let favoriteColors = JSON.parse(localStorage.getItem("favoriteColors")) || [];
        favoriteColors.forEach(color => {
            let colorDiv = document.createElement("div");
            colorDiv.classList.add("favoriteColor");
colorDiv.style.backgroundColor = color;
            colorDiv.innerHTML = `<button class="removeBtn" data-color="${color}">&times;</button>`;
            favoritesList.appendChild(colorDiv);
        });
    };
 
    const removeFavoriteColor = (color) => {
        let favoriteColors = JSON.parse(localStorage.getItem("favoriteColors")) || [];
        favoriteColors = favoriteColors.filter(favColor => favColor !== color);
        localStorage.setItem("favoriteColors", JSON.stringify(favoriteColors));
        displayFavoriteColors();
    };
 
    generateColorBtn.addEventListener("click", () => {
        const randomColor = generateRandomColor();
        displayColor(randomColor);
    });
 
    saveColorBtn.addEventListener("click", () => {
        const currentColor = hexCode.textContent;
        if (currentColor) {
            saveColor(currentColor);
        }
    });
 
    favoritesList.addEventListener("click", (e) => {
        if (e.target.classList.contains("removeBtn")) {
            const color = e.target.getAttribute("data-color");
            removeFavoriteColor(color);
        }
    });
 
    displayFavoriteColors();
});