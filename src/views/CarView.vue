<template>
<div class="d-flex justify-content-center" v-for="car in cars">
  <div class="card m-2" style="width: 70%;">
    <div class="card-body">
      <img width="300" height="200" class="float-end mt-3" :src="car.kep_Url" alt="">
      <h5 class="card-title ">{{ car.marka_modelnev }}</h5>
      <p class="card-text">Lóerő: {{ car.loero }}</p>
      <p class="card-text">Férőhely: {{ car.ferohely}}</p>
    <button class="btn btn-outline-primary w-50 p-2 m-2">Foglald le most!</button>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import CarService from '../services/carservice'

const cars = ref();

CarService.getAllCars()
  .then(response => {
    console.log(response);
    cars.value = response;
  })

</script>

<style scoped>

</style>