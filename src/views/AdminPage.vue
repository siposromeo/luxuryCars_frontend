<template>
<div class="d-flex justify-content-between m-2">
    <h1 class="m-2" style="user-select: none;">Hozzáadási felület</h1>
    <form class="m-2 w-50" @submit.prevent="SubmitEvent">
        <div class="mt-2">
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
      <label class="form-label">Videó</label>
      <input type="text" class="rounded form-control" v-model="auto.video_Url"/>
    </div>
    <button class="w-25 align-content-end btn btn-danger mt-3" type="submit">Feltöltés</button>
</form>
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
    video_Url:''
  })

  const SubmitEvent = async()=>{
    const result = await auto.value;
    if (result) {
      await axios.post('https://bgs.jedlik.eu/luxurycars/luxurycars/api/cars', auto.value)
    console.log("ok");
    await alert("Sikeres feltöltés!");
    }
    else{
      alert("Sikertelen feltöltés...")
    }
  }
</script>


<style scoped>
input{
    border: 1px solid red;
}
</style>