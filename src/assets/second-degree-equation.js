function SecondDegreeEquation (valueA, valueB, valueC) {
  this.valueA = valueA
  this.valueB = valueB
  this.valueC = valueC
}

SecondDegreeEquation.prototype = {
  calculateDelta () {
    return Math.pow(this.valueB, 2) - 4 * this.valueA * this.valueC
  },

  calculateX () {
    let delta = this.calculateDelta()
    let squareDelta = Math.sqrt(delta)
    let result = {}

    if (delta < 0) {
      result.error = true
      result.errorMessae = 'Não há raízes reais.'
    } else {
      result.x1 = (-this.valueB + squareDelta) / (2 * this.valueA)
      if (delta > 0) {
        result.x2 = (-this.valueB - squareDelta) / (2 * this.valueA)
      }
    }

    return result
  },

  calculateVertex () {

  }
}

module.exports = {
  SecondDegreeEquation
}
