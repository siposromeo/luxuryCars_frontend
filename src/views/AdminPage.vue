<template>
  <h1 class="d-flex justify-content-center m-2 mt-3" style="user-select: none;">Admin felület</h1>
  <body>
    <div class="d-flex justify-content-center m-2" style="user-select: none;">
    <form class="m-2 w-50" @submit.prevent="SubmitEvent()">
        <div class="mt-1">
      <label class="form-label">Márka</label>
      <input type="text" class="rounded form-control" v-model="auto.marka_modelnev"/>
    </div>
    <div class="mt-2">
      <label class="form-label">Férőhely</label>
      <input type="text" class="rounded form-control" v-model="auto.ferohely"/>
    </div>
    <div class="mt-2">
      <label class="form-label">Lóerő</label>
      <input type="text" class="rounded form-control" v-model="auto.loero"/>
    </div>
    <div class="mt-2">
      <label class="form-label">Kép</label>
      <input type="text" class="rounded form-control" v-model="auto.kep_Url"/>
    </div>
    <div class="mt-2">
      <label class="form-label">Leírás</label>
      <input type="text" class="rounded form-control" v-model="auto.leiras"/>
    </div>
    <div class="d-flex justify-content-center mt-3">
      <input type="submit" class="btn btn-outline-warning mt-2 mb-3" value="Feltöltés">
    </div>
  </form>
</div>
</body>
<table class="table table-responsive table-bordered table-hover container">
  <thead>
    <tr class="text-center">
      <th scope="col">Modell</th>
      <th scope="col">Lóerő</th>
      <th scope="col">Leírás</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in cars" class="text-center">
      <th scope="row">{{ item.marka_modelnev }}</th>
      <td>{{ item.loero}}</td>
      <td>{{ item.leiras }}</td>
    </tr>
  </tbody>
</table>

</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import CarService from '../services/carservice'

const cars = ref();
const auto = ref({
    marka_modelnev:'',
    ferohely:'',
    loero:'',
    kep_Url:'',
    leiras:''
  })

  const SubmitEvent = async () =>{
    const result = await  auto.value;
    if (result) {
      await axios.post('https://bgs.jedlik.eu/luxurycars/luxurycars/api/cars', auto.value)
    // console.log(auto.value);
    location.reload()
    await alert("Sikeres feltöltés!");
    }
    else{
      alert("Sikertelen feltöltés...")
    }
  }

  CarService.getAllOfTheCars()
  .then(res => {
    cars.value = res
    console.log(res.data)
})

</script>


<style scoped>
body{
  font-family: "Jersey 10", sans-serif;
  font-size: 1.5rem;
  letter-spacing: 1cap;
}
input{
    border: 1px solid orange;
}
</style>