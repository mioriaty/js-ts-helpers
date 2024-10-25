export class CounterComponent extends HTMLElement {
  // define the value property
  static get observedAttributes() {
    return ["value", "step"];
  }

  get value() {
    return this.getAttribute("value");
  }

  set value(val) {
    if (val) {
      this.setAttribute("value", val);
    } else {
      this.removeAttribute("value");
    }
  }

  get step() {
    return this.getAttribute("step");
  }

  set step(val) {
    if (val) {
      this.setAttribute("step", val);
    } else {
      this.removeAttribute("step");
    }
  }

  // define properties to store references to DOM elements in the component's template
  $increaseButton: HTMLElement | undefined | null;
  $decreaseButton: HTMLElement | undefined | null;
  $label: HTMLElement | undefined | null;

  // always do a super() call first to ensure that the component inherits the correct prototype chain and all properties and methods of the class it extends.
  constructor() {
    super();

    // create a shadow root
    this.attachShadow({ mode: "open" });

    // set references to the DOM elements from the component's template
    this.$increaseButton = this.shadowRoot?.querySelector("#increase-button");
    this.$decreaseButton = this.shadowRoot?.querySelector("#decrease-button");
    this.$label = this.shadowRoot?.querySelector("#label");
  }

  connectedCallback() {
    // add event listeners on both buttons
    // we bind "this" to the callback of the listener to attach the component's scope.
    this.$increaseButton?.addEventListener("click", this._increase.bind(this));
    this.$decreaseButton?.addEventListener("click", this._decrease.bind(this));
  }

  disconnectedCallback() {
    // remove event listeners on both buttons
    this.$increaseButton?.removeEventListener(
      "click",
      this._increase.bind(this)
    );
    this.$decreaseButton?.removeEventListener(
      "click",
      this._decrease.bind(this)
    );
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (this.$label) {
      this.$label.innerHTML = newValue;
    }
  }

  adoptedCallback() {
    console.log("adopted");
  }

  _increase() {
    if (this.step && this.value) {
      const step = +this.step;
      const value = +this.value;
      this.value = String(value + step);
    }
  }

  _decrease() {
    if (this.step && this.value) {
      const step = +this.step;
      const value = +this.value;
      this.value = String(value - step);
    }
  }
}

customElements.define("counter-component", CounterComponent);
