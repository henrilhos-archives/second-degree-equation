<template>
  <div id="app">
    <div class="container" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
      <div class="mb-3 h1 text-center">
        Equação de Segundo Grau
      </div>

      <div class="row">
        <div class="input-group mb-3 col">
          <div class="input-group-prepend">
            <span class="input-group-text">Valor A</span>
          </div>
          <input v-model="valorA" type="number" class="form-control">
        </div>
        <div class="input-group mb-3 col">
          <div class="input-group-prepend">
            <span class="input-group-text">Valor B</span>
          </div>
          <input v-model="valorB" type="number" class="form-control">
        </div>
        <div class="input-group mb-3 col">
          <div class="input-group-prepend">
            <span class="input-group-text">Valor C</span>
          </div>
          <input v-model="valorC" type="number" class="form-control">
        </div>
      </div>
      <div class="row">
        <button @click="calculate()" class="btn col btn-outline-primary mx-3">
          Calcular
        </button>
      </div>

      <div class="mt-3 alert alert-danger" role="alert">
        <span>AAAAA</span>
      </div>

      <div class="dropdown-divider my-3"></div>

      <div class="mt-2 h3 text-center">
        aaaaaaa
      </div>
    </div>
  </div>
</template>

<script>
import { SecondDegreeEquation } from '@/assets/second-degree-equation.js'
export default {
  data () {
    return {
      valorA: null,
      valorB: null,
      valorC: null
    }
  },

  methods: {
    calculate () {
      var secDegreeEquation = new SecondDegreeEquation(this.valorA, this.valorB, this.valorC)

      console.log(secDegreeEquation.calculateX())
    }
  }
}
</script>
