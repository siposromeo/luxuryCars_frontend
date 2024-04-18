<template>
  <h1 class="d-flex justify-content-center m-2 mt-3" style="user-select: none;">Hozzáadási felület</h1>
  <body>
    <div class="d-flex justify-content-center m-2" style="user-select: none;">
    <form class="m-2 w-50" @submit.prevent="SubmitEvent">
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
  </form>
</div>
  </body>
<div class="d-flex justify-content-center">
  <button class="btn btn-danger mt-1 mb-3" type="submit">Feltöltés</button>
</div>
</template>

<script setup>
import {ref} from 'vue';
import axios from 'axios';
const auto = ref({
    marka_modelnev:'',
    ferohely:'',
    loero:'',
    kep_Url:'',
    leiras:''
  })

  const SubmitEvent = async()=>{
    const result = await auto.value;
    if (result) {
      await axios.post('https://bgs.jedlik.eu/luxurycars/luxurycars/api/cars', auto.value)
    // console.log("ok");
    await alert("Sikeres feltöltés!");
    }
    else{
      alert("Sikertelen feltöltés...")
    }
  }
</script>


<style scoped>
body{
  font-family: "Jersey 10", sans-serif;
  font-size: 1.5rem;
  letter-spacing: 1cap;
}
input{
    border: 1px solid red;
}
</style>