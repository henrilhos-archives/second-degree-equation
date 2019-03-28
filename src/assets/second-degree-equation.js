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
      result.errorMessage = 'Não há raízes reais.'
    } else {
      result.x1 = (-this.valueB + squareDelta) / (2 * this.valueA)
      if (delta > 0) {
        result.x2 = (-this.valueB - squareDelta) / (2 * this.valueA)
      }
    }

    return result
  },
  calculateVertex () {
    let XVertex = (this.valueB / (2 * this.valueA)) * (-1)
    let YVertex = (this.calculateDelta() / (4 * this.valueA)) * (-1)

    return {
      x: XVertex,
      y: YVertex
    }
  },
  getImage () {
    if (this.valueA > 0) {
      return '{ y ∈ R / y ≥ Yv }'
    } else if (this.valueA < 0) {
      return '{ y ∈ R / y ≤ Yv }'
    } else {
      return {
        error: true,
        errorMessage: 'Valor de A não pode ser zero.'
      }
    }
  },
  calculate () {
    let xValues = this.calculateX()
    let vertexValues = this.calculateVertex()
    let image = this.getImage()

    if (xValues.error) {
      return xValues
    }

    if (image.error) {
      return image
    }

    return {
      xValues: xValues,
      vertexValues: vertexValues,
      image: image
    }
  }
}

module.exports = {
  SecondDegreeEquation
}
