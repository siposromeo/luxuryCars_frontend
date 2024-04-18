<template>
    <Carousel :value="cars" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000" :showIndicators="false" :showNavigators="false">
      <template #item="cars">
        <div class="mb-3 mt-3 d-lg-flex d-grid align-items-center">
          <div class="mx-auto ms-auto m-lg-auto">
            <img :src="cars.data.kep_Url" style="max-width: 540px; max-height: 260px;" class="rounded"/>
          </div>
        </div>
      </template>
    </Carousel>


  <div class="row-cols-3 m-1 card-group d-flex rounded text-center">
      <div class="card bg-warning text-white ">
        <h1 class="card-title">Több, mint 30 autó áll készen, arra hogy kibéreld! Mire vársz?</h1>
      </div>
      <div class="card text-warning">
        <h1 class="card-title">Azonnali foglalás, szinte másodpercek alatt</h1>
      </div>
    <div class="card bg-warning text-white">
      <h1 class="card-title">Több, mint 10 éve a hiperautókra vágyók szolgálatában. Veletek!</h1>
    </div>
  </div>


  
  <div class="row-cols-1 m-2 d-flex rounded">
    <div class="mb-2">

    <div class="card-group">
      <div class="card">
        <img
          src="https://s1.cdn.autoevolution.com/images/gallery/JAGUAR-F-Type-400-Coupe-5876_12.jpg"
          class="w-auto h-auto rounded">
      </div>
      <div class="card">
        <div class="card-body text-center mt-5">
          <h1 class="mt-5 text-center" style=" letter-spacing: 0.4vw;">Béreld ki akár most álom autódat</h1>
          <RouterLink class="btn btn-warning p-3 m-5" to="/car">Autóink
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="card-group">
      <div class="card">
        <div class="card-body text-center mt-5">
          <h1 class="mt-5 text-center" style="letter-spacing: 0.5vw;">Nagy választék</h1>
          <RouterLink class="btn btn-warning p-3 m-5" to="/car">Foglald le most</RouterLink>
        </div>
      </div>
      <div class="card">
        <img src="https://s1.cdn.autoevolution.com/images/gallery/audi-r8-v10-performance-rwd-spyder-2021-7219_19.jpg" class="w-auto h-auto rounded">
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Carousel from 'primevue/carousel';
import CarService from '../services/carservice'

const cars = ref();

CarService.getAllCars()
  .then(res => {
    cars.value = res.data
    // console.log(res.data)
  })

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '350px',
    numVisible: 1,
    numScroll: 1
  }
]);
</script>

<style scoped>
h1{
  font-family: "Jersey 10", sans-serif;
}
.btn{
  font-family: "Jersey 10", sans-serif;
  font-weight: 1000;
  font-size: larger;
}
.icon {
  width: 100%;
  height: 100%;
  font-size: 90px;
}

.card {
  border: none;
}
</style>