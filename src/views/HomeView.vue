<template>
  <div class="row-cols-1">
    <Carousel :value="cars" :numVisible="3" :numScroll="2" :responsiveOptions="responsiveOptions">
      <template #item="cars">
        <div class="surface-border border-black border-round m-4 p-2">
          <div class="mx-auto ms-auto m-lg-auto">
            <img :src="cars.data.kep_Url" style="max-width: 450px; max-height: 270px;"
              class="w-full border-round  rounded" />
          </div>
        </div>
      </template>
    </Carousel>
  </div>


  <div class="row-cols-3 m-2 card-group d-flex mt-2 rounded">
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
        <img src="https://s1.cdn.autoevolution.com/images/gallery/LEXUS-LFA-4155_22.jpg" class="w-100 h-100 rounded">
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
    console.log(res.data)
  })

// onMounted(() => {
//     CarService.getAllCars()
//     .then((data) => (cars.value));
//     console.log(data);
// })

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
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
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