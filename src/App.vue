<template>
  <div id="app">
    <div class="container" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
      <div class="mb-3 h1 text-center" id="page-title">
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
        <button class="btn col btn-outline-primary mx-2">
          Calcular
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
