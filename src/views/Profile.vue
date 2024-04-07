<template>
  <div class="row-cols-1 row-cols-lg-1 row-cols-sm-1 mx-auto d-block mt-5">
    <h1>Profil és módosítás</h1>
    <div class="m-1">
      <label class="form-label">Name</label>
      <input type="text" v-model="userData.user.name" disabled class="rounded form-control" />
    </div>
    <div class="m-1">
      <label class="form-label">Driving License Number</label>
      <input type="text" v-model="userData.user.jogositvany_szam" disabled class="rounded form-control" />
    </div>
    <div class="m-1">
      <label class="form-label">Telefonszám</label>
      <input type="tel" v-model="userData.user.telefonszam" disabled class="rounded form-control" />
    </div>
    <div class="m-1">
      <label class="form-label">Számlázási cím</label>
      <input type="text" v-model="userData.user.szamlazasi_cim" disabled class="rounded form-control" />
      <!-- <Button class="btn btn-warning w-75 d-block mx-auto mt-4 mb-5">Módosítás</Button> -->
    </div>
  </div>
  <div class="row-cols-1 row-cols-lg-1 row-cols-sm-1 mx-auto d-block mt-5">
    <h1 class="d-flex justify-content-center">Foglalások</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Ár</th>
          <th scope="col">Megrendelés dátuma</th>
          <th scope="col">Tól</th>
          <th scope="col">Ig</th>
          <th scope="col">Autó</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data">
          <td>{{ item.element.ar }}</td>
          <!-- <td>{{ rendeles.auto_id }}</td> -->
          <td>{{ item.element.megrendeles_datum }}</td>
          <td>{{ item.resp.berles_Kezdete.split(" ")[0] }}</td>
          <td>{{ item.resp.berles_Vege.split(" ")[0] }}</td>
          <td>{{ item.car.marka_modelnev }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import CarService from '../services/carservice'
import { useUserStorage } from '@/stores/userstore';

// const car = ref();
const data = ref([]);
const userstore = useUserStorage();

const userData = userstore

setdata();
function setdata() {
  userData.user.rendelesek.forEach(element => {
    CarService.getNaptarById(element.naptar_id).then(resp => {
      CarService.getCarById(element.auto_id).then(car => {
        data.value.push({element,resp, car});
      })
    })
  });
  // console.log(data.value);
}
// console.log(userData.user);

</script>

<style scoped>
body {
  margin-top: 20px;
  color: #1a202c;
  text-align: left;
  background-color: #e2e8f0;
}

.main-body {
  padding: 15px;
}

.card {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 2 solid rgba(0, 0, 0, .125);
  border-radius: .25rem;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}

.gutters-sm {
  margin-right: -8px;
  margin-left: -8px;
}

.gutters-sm>.col,
.gutters-sm>[class*=col-] {
  padding-right: 8px;
  padding-left: 8px;
}

.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.bg-gray-300 {
  background-color: #e2e8f0;
}

.h-100 {
  height: 100% !important;
}

.shadow-none {
  box-shadow: none !important;
}
</style>