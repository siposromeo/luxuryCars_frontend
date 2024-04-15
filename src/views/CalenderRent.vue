<template>
    <VueDatePicker class="d-block p-2" v-model="date" range></VueDatePicker>
    <div class="d-flex justify-content-evenly m-2">
        <img class="w-25 h-auto rounded" :src="car.kep_Url">
         <div class="d-flex justify-content-center card m-2" style="width: 20rem; height:fit-content; border: 0rem">
        <p><b>A jármű lóereje: </b>{{ car.marka_modelnev }}</p>
        <p><b>A jármű lóereje: </b>{{ car.loero }}</p>
        <p><b>Férőhelyek száma: </b>{{ car.ferohely}}</p>
        </div>
    </div>
    <div class="d-flex justify-content-center mb-3">
        <button @click="foglalas()" class=" w-25 btn btn-warning">FOGLALÁS</button>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { useRoute } from 'vue-router';
import CarService from '../services/carservice'
import { useUserStorage } from '@/stores/userstore';
import axios from 'axios';
import router from '@/router/router';
const userstore = useUserStorage();

const date = ref();
const route = useRoute();
const car_id = route.params.id;
const car = ref();

async function setCar(){
    car.value = await CarService.getCarById(car_id)
    // console.log(car.value);
}
setCar()

const foglalas = async () =>{
    const foglalasData = {
        berles_Kezdete: date.value[0].toISOString().split('T')[0],
        berles_Vege: date.value[1].toISOString().split('T')[0],
        megrendeles_datum: new Date().toISOString().split('T')[0],
        auto_id: car.value.id
    }
    await axios.post('/rendeles',foglalasData ,{headers:{'Authorization': `Bearer ${userstore.token}`}})
    router.push('/profile')
}
onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];
})


</script>

<style scoped>

</style>