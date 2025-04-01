export default class Carrossel {
  private next: HTMLDivElement | null;
  private back: HTMLButtonElement |null;
  constructor() {
    this.back = document.querySelector(".bntBack");
    this.next = document.querySelector(".bntNext");
    this.init();
  }

  init(): void {
    const carrossel = document.querySelector(".carrossel-items") 
    this.next?.addEventListener("click", (event) => {
      carrossel?.classList.remove("back");
      carrossel?.classList.toggle("next");
    });
    this.back?.addEventListener("click", (event) => {
      carrossel?.classList.remove("next");
      carrossel?.classList.toggle("back");
    });
  }
}
