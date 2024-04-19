<template>
  <div class="row-cols-1 row-cols-lg-1 row-cols-sm-1 mx-auto d-block mt-4 text-center w-50" style="user-select: none;">
    <h1>Profil és foglalások</h1>
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
    </div>
  </div>
  <h1 class="d-flex justify-content-center mt-3" style="user-select: none;">Foglalások</h1>
  <div class="m-2 mb-1" style="font-size: 1rem;">
    <table class="table">
      <thead>
        <tr class="table-secondary border-2 border-dark text-center" style="font-weight: bolder; user-select: none;" >
          <th scope="col">ÁR</th>
          <th scope="col">GÉPJÁRMŰ</th>
          <th scope="col">MEGRENDELÉS</th>
          <th scope="col">BÉRELVE-TÓL</th>
          <th scope="col">BÉRELVE-IG</th>
        </tr>
      </thead> 
      <tbody class="table table-striped border-3 text-center" style="user-select: none;">
        <tr v-for="item in data">
          <td>{{ item.element.ar }}</td>
          <td>{{ item.car.marka_modelnev }}</td>
          <td>{{ item.element.megrendeles_datum }}</td>
          <td>{{ item.resp.berles_Kezdete.split(" ")[0] }}</td>
          <td>{{ item.resp.berles_Vege.split(" ")[0] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CarService from '../services/carservice'
import { useUserStorage } from '@/stores/userstore';
import userservice from '@/services/userservice';

const data = ref([]);
const userstore = useUserStorage();

const userData = userstore

setdata();
async function setdata() {
   await userservice.getuserbyID(userData.user.id).then(resp => {
    // console.log(resp.data[0])
     userData.user.rendelesek = resp.data[0].rendelesek;
  })
  userData.user.rendelesek.forEach(element => {
    CarService.getNaptarById(element.naptar_id).then(resp => {
      CarService.getCarById(element.auto_id).then(car => {
        data.value.push({element, resp, car});
      })
    })
  });
}

</script>

<style scoped>
div{ 
  font-family: "Jersey 10", sans-serif;
  font-size: 1.5rem;
  font-weight: 1000;
}
h1{
  font-family: "Jersey 10", sans-serif;
  font-size: 2.4rem;
}
</style>