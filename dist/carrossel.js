export default class Carrossel {
    constructor() {
        this.back = document.querySelector(".bntBack");
        this.next = document.querySelector(".bntNext");
        this.init();
    }
    init() {
        var _a, _b;
        const carrossel = document.querySelector(".carrossel-items");
        (_a = this.next) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (event) => {
            carrossel === null || carrossel === void 0 ? void 0 : carrossel.classList.remove("back");
            carrossel === null || carrossel === void 0 ? void 0 : carrossel.classList.toggle("next");
        });
        (_b = this.back) === null || _b === void 0 ? void 0 : _b.addEventListener("click", (event) => {
            carrossel === null || carrossel === void 0 ? void 0 : carrossel.classList.remove("next");
            carrossel === null || carrossel === void 0 ? void 0 : carrossel.classList.toggle("back");
        });
    }
}
