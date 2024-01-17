export default class Tile {
  #tileElement
  #x
  #y
  #value

  constructor(tileContainer, value = Math.random() > 0.5 ? 2 : 4) {
    this.#tileElement = document.createElement("div")
    this.#tileElement.classList.add("tile")
    tileContainer.append(this.#tileElement)
    this.value = value
  }

  get value() {
    return this.#value
  }

  set value(v) {
    this.#value = v
    this.#tileElement.textContent = v
    const colors = this.setColor(v)
    this.#tileElement.style.backgroundColor = colors.backgroundColor
    this.#tileElement.style.color = colors.color
  }

  set x(value) {
    this.#x = value
    this.#tileElement.style.setProperty("--x", value)
  }

  set y(value) {
    this.#y = value
    this.#tileElement.style.setProperty("--y", value)
  }

  remove() {
    this.#tileElement.remove()
  }

  waitForTransition(animation = false) {
    return new Promise(resolve => {
      this.#tileElement.addEventListener(
        animation ? "animationend" : "transitionend",
        resolve,
        {
          once: true,
        }
      )
    })
  }
  setColor(powerOfTwo) {
    switch (powerOfTwo) {
      case 2:
        return { backgroundColor: '#eee4da', color: '#727371' };
      case 4:
        return { backgroundColor: '#ece0ca', color: '#727371' };
      case 8:
        return { backgroundColor: '#f4b17a', color: 'white' };
      case 16:
        return { backgroundColor: '#f59575', color: 'white' };
      case 32:
        return { backgroundColor: '#f57c5f', color: 'white' };
      case 64:
        return { backgroundColor: '#f65d3b', color: 'white' };
      case 128:
        return { backgroundColor: '#edce71', color: 'white' };
      case 256:
        return { backgroundColor: '#edcc63', color: 'white' };
      case 512:
        return { backgroundColor: '#edc651', color: 'white' };
      case 1024:
        return { backgroundColor: '#eec744', color: 'white' };
      case 2048:
        return { backgroundColor: '#ecc230', color: 'white' };
      case 4096:
        return { backgroundColor: '#fe3d3d', color: 'white' };
      case 8192:
        return { backgroundColor: '#ff2020', color: 'white' };
      default:
        // Default color for other cases
        return { backgroundColor: 'gray', color: 'white' };
    }
  }
}
