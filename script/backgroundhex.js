function createHexagons() {
    const hexGrid = document.getElementById("hexGrid");
    const hexWidth = 90;
    const hexHeight = 104;
    const cols = Math.ceil(window.innerWidth / hexWidth) + 20;
    const rows = Math.ceil(window.innerHeight / (hexHeight * 0.75)) + 20;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const hex = document.createElement("div");
            hex.className = "hex";
            hex.dataset.row = r;
            hex.dataset.col = c;
            hex.style.left = `${c * hexWidth + (r % 2) * (hexWidth / 2)}px`;
            hex.style.top = `${r * hexHeight * 0.75}px`;

            const hexInner = document.createElement("div");
            hexInner.className = "hex-inner";

            hex.appendChild(hexInner);
            hexGrid.appendChild(hex);

            hex.addEventListener("mouseenter", () => highlightNeighbors(r, c, true));
            hex.addEventListener("mouseleave", () => highlightNeighbors(r, c, false));
        }
    }
}

function highlightNeighbors(row, col, highlight) {
    const hexagons = document.querySelectorAll(".hex");
    const directions = [
        [0, 1], [0, -1], [-1, 0], [1, 0], // ซ้าย ขวา บน ล่าง
        row % 2 === 0 ? [-1, -1] : [-1, 1], // ซ้ายบน (เฉพาะแถวคู่)
        row % 2 === 0 ? [1, -1] : [1, 1] // ซ้ายล่าง (เฉพาะแถวคู่)
    ];

    hexagons.forEach(hex => {
        const hexInner = hex.querySelector(".hex-inner");
        if (!hexInner) return;

        const r = parseInt(hex.dataset.row);
        const c = parseInt(hex.dataset.col);

        if (r === row && c === col) {
            hexInner.classList.toggle("highlight", highlight);
        } else {
            for (let [dr, dc] of directions) {
                if (r === row + dr && c === col + dc) {
                    hexInner.classList.toggle("highlight-neighbor", highlight);
                }
            }
        }
    });
}

window.onload = createHexagons;
window.onresize = () => {
    document.getElementById("hexGrid").innerHTML = "";
    createHexagons();
};