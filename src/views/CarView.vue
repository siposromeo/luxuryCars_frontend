<template>

<div class="d-flex justify-content-center text-danger m-2 mt-3" v-if="!userstore.isLoggedIn">FONTOS! Foglalás előtt regisztrálj vagy jelentkezz be az oldal jobb felső sarkánál található gombokkal!</div>
  <div class="d-flex row-cols-3 d-flex container-fluid justify-content-center align-items-center mt-3">
    <button class="btn btn-warning float-start" @click="lapozasLe">Previous</button>
    <div class="text-center" style="font-weight: bolder; font-size: larger;">{{ page }}</div>
    <button class="btn btn-warning float-end" @click="lapozasFel">Next</button>
  </div>
  <div class="d-flex justify-content-center col-xl-12">
    <div class="w-100 m-2 row row-cols-lg-2 d-flex"> 
      <div class="d-flex" v-for="car in cars">
        <div class="card mb-2 mt-2">
          <div class="card-body d-flex flex-column flex-row justify-content-center">
            <img class="w-auto h-75 rounded" :src="car.kep_Url">
            <h2 class="card border-0 m-2 card-title text-center">{{ car.marka_modelnev }}</h2>
            <div class="d-flex justify-content-center">
              <p class="card-text">Lóerő: {{ car.loero }}</p>
            </div>
            <div class="d-flex justify-content-center">
              <p class="card-text">Férőhely: {{ car.ferohely }}</p>
            </div>
            <router-link class="btn btn-outline-dark" style="font-weight: bolder; letter-spacing: 0.3rem;" v-if="userstore.isLoggedIn" :to='"/calendarrent/" +car.id'>Foglald le most!</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- GOMBOK -->
  <div class="d-flex row-cols-3 d-flex container-fluid justify-content-center align-items-center mb-3">
    <button class="btn btn-warning float-start" @click="lapozasLe">Előző oldal</button>
    <div class="text-center" style="font-weight: bolder; font-size: larger;">{{ page }}</div>
    <button class="btn btn-warning float-end" @click="lapozasFel">Következő oldal</button>
  </div>
  <!-- GOMBOK -->
</template>

<script setup>
import { ref } from 'vue';
import CarService from '../services/carservice'
import { useUserStorage } from '@/stores/userstore';

const userstore = useUserStorage();
const cars = ref();
const page = ref(1);
const max_page = ref();

async function lapozasFel() {
  if (page.value < max_page.value) {
    page.value += 1
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
  if (page.value > 1) {
    page.value -= 1
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
    // console.log(max_page.value);
  })

</script>

<style scoped>
.card {
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: 0.5s;
  background-color: white;
  font-size: 2rem;
  font-family: "Jersey 10", sans-serif;
}
h2{
  font-weight: bolder;
}
</style>