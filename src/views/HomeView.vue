<template>
    <Carousel :value="cars" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000" :showIndicators="false" :showNavigators="false">
      <template #item="cars">
        <div class="p-2 m-2 d-lg-flex d-grid align-items-center">
          <div class="mx-auto ms-auto m-lg-auto">
            <img :src="cars.data.kep_Url" style="max-width: 500px; max-height: 250px;" class="rounded"/>
          </div>
        </div>
      </template>
    </Carousel>
  <div class="row-cols-3 m-3 card-group d-flex mt-2 rounded">
    <div class="card bg-warning text-white">
      <h1 class="text-center mt-5">30 db</h1>
      <div class="card-body">
        <h5 class="card-title text-center">Auto áll készen, arra hogy kibereld őket</h5>
      </div>
    </div>
    <div class="card text-warning">
      <ion-icon class="icon" name="stopwatch-outline"></ion-icon>
      <div class="card-body">
        <h5 class="card-title text-center">Azonnali foglalás</h5>
      </div>
    </div>
    <div class="card bg-warning text-white">
      <h1 class="text-center mt-5">2 év</h1>
      <div class="card-body">
        <h5 class="card-title text-center">Tapasztalat</h5>
      </div>
    </div>
  </div>
  <div class="d-block m-2">
    <div class="card-group">
      <div class="card">
        <img
          src="https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1685458010/autoexpress/2023/05/Porsche%20911%20GTS%20UK%20001_otx6j7.jpg"
          class="w-100 h-100 rounded">
      </div>
      <div class="card">
        <div class="card-body text-center">
          <h1 class="mt-5 text-center" style="font-family: fantasy; letter-spacing: 0.3rem;">Béreld ki akár most
            álomautodat</h1>
          <RouterLink class="btn btn-warning p-4 m-5" style="font-family: fantasy;" to="/registration">Regisztráció
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="card-group">
      <div class="card">
        <div class="card-body text-center">
          <h1 class="mt-5 text-center" style="font-family: fantasy; letter-spacing: 0.3rem;">Nagy választék</h1>
          <RouterLink class="btn btn-warning p-4 m-5" style="font-family: fantasy;" to="/car">Foglald le most</RouterLink>
        </div>
      </div>
      <div class="card">
        <img src="https://s1.cdn.autoevolution.com/images/gallery/LEXUS-LFA-4155_22.jpg" class="w-auto h-auto rounded h-100">
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
    numVisible: 3,
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
.icon {
  width: 100%;
  height: 100%;
  font-size: 90px;
}

.card {
  border: none;
}

.p-carousel-indicator{
 text-decoration: none !important;
}
</style>