class Header {
  // регестрируем DOM элементы в переменную selectors
  selectors = {
    root: "[data-js-header]",
    overlay: "[data-js-header-overlay]",
    burgerButton: "[data-js-header-burger-button]",
  };
  // создаем состояние класса
  stateClasses = {
    isActiv: "is-active",
    isLock: "is-lock",
  };

  constructor() {
    // достаем DOM элементы страницы с помощью метода querySelector и this.selectors
    this.rootElement = document.querySelector(this.selectors.root);
    this.overlayElement = this.rootElement.querySelector(
      this.selectors.overlay
    );

    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton
    );
    this.bindEvents();
  }

  // метод для смены класса у DOM элемента
  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActiv);
    this.overlayElement.classList.toggle(this.stateClasses.isActiv);
    document.documentElement.classList.toggle(this.stateClasses.isLock);
  };

  // метод для открытия burger menu
  bindEvents() {
    this.burgerButtonElement.addEventListener(
      "click",
      this.onBurgerButtonClick
    );
  }
}

export default Header;
