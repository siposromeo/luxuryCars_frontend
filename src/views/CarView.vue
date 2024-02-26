<template>
<div class="row-cols-md-5 row-cols-sm-1 row-cols-lg-4 row-cols-xl-5 d-flex container-fluid">
  <div class="w-100 m-1 row row-cols-2 d-flex">
    <div class="d-flex" v-for="car in cars">
    <div class="card mb-2 mt-2 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div class="card-body d-flex flex-column justify-content-center">
        <img class="w-100 h-75 rounded" :src="car.kep_Url">
          <h3 class="card-title">{{ car.marka_modelnev }}</h3>
        <p class="card-text">Lóerő: {{ car.loero }}</p>
        <p class="card-text">Férőhely: {{ car.ferohely}}</p>
        <button class="btn btn-outline-primary ">Foglald le most!</button>
      </div>
    </div>
  </div>
</div>
</div>
<div class="d-flex row-cols-3 d-flex container-fluid justify-content-center align-items-center mb-2">
  <button class="btn btn-warning float-start" @click="lapozasLe">Vissza</button>
  <div></div>
  <button class="btn btn-warning float-end" @click="lapozasFel">Előre</button>
</div>
</template>

<script setup>
import { ref } from 'vue';
import CarService from '../services/carservice'

const cars = ref();
const page = ref(1);
const max_page = ref();

async function lapozasFel() {
  if (page.value < max_page.value)  {
    page.value +=1
  }
  let res = await CarService.lapozz(page.value)
  // console.log(res.data);
   cars.value = res.data.data
   window.scrollTo({
    top: 0,
    behavior: "smooth"
   })
}
async function lapozasLe() {
  if (page.value > 1)  {
    page.value -=1
  }
  let res = await CarService.lapozz(page.value)
  // console.log(res.data);
   cars.value = res.data.data
   window.scrollTo({
    top: 0,
    behavior: "smooth"
   })
}

CarService.getAllCars()
  .then(response => {
    cars.value = response.data;
    max_page.value = response.last_page;
    console.log(max_page.value);
  })

</script>

<style scoped>
.card{
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
  0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: 0.3s;
  background-color: white;
  font-size: 1.5rem;
  font-family: fantasy;
}
</style>