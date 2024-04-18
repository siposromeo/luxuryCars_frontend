<template>
    <VueDatePicker class="d-block p-3 mx-auto w-50" v-model="date" range></VueDatePicker>
    <body class="mt-1 mb-3">
        <div style="user-select: none;">
            <div class="row m-2 justify-content-evenly ">
                    <img class="w-50 col-1 rounded-5" :src="car.kep_Url">
                <div class="d-flex justify-content-center card m-2 m-3 col-1" style="width: 25rem; height:fit-content; border: 0.1rem solid; background-color: #f8f9fa; font-size: 1.1rem;">
                    <p><b>A jármű lóereje: </b>{{ car.marka_modelnev }}</p>
                    <p><b>A jármű lóereje: </b>{{ car.loero }}</p>
                    <p><b>Férőhelyek száma: </b>{{ car.ferohely }}</p>
                    <p><b>Rövid információ: </b>{{ car.leiras }}</p>
                    <div class="d-flex justify-content-center mb-3 mt-3">
                        <button @click="foglalas()" class=" w-50 btn btn-danger">FOGLALÁS</button>
                    </div>
                </div>
            </div>
        </div>
    </body>
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
body{
    font-family: "Jersey 10", sans-serif;
}
</style>