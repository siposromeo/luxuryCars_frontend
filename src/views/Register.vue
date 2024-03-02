<template>
  <form class="mb-5 mt-5" style="text-align: center;" @submit.prevent="SubmitEvent">
    <div>
      <div class="mx-auto">
        <div>
        <div >
          <label for="nameInput" class="form-label" style="font-weight: bolder; color: orange;">Teljes név</label>
          <input type="name" class="form-control" id="nameInput" v-model="form.name">
        </div>
        <div>
          <label for="emailInput" class="form-label"
            style="color: orange; margin-bottom: 0.5rem; margin-top: 0.5rem;">Email
            cím</label>
          <input type="email" class="form-control" id="emailInput" v-model="form.email">
        </div>
        <div>
          <label for="inputPassword" class="form-label"
            style="font-weight: bolder; color: orange; margin-bottom: 0.5rem; margin-top: 0.5rem;">Jelszó</label>
          <input type="password" id="inputPassword" class="form-control" v-model="form.password">
        </div>
        <p style="font-size: 0.6rem;">
          FONTOS! A jelszavad legyen legalább 8 karakter.
        </p>
      </div>
      </div>

    </div>

    <div class="d-flex justify-content-center" style="padding-top: 0.1rem; margin-top: 0.1rem;">
      <div style="color: orange;" class="col-md-3 m-3">
        <label for="licenceNumber" class="form-label" style="letter-spacing: -1.1px;">Jogosítvány szám</label>
        <input type="licenceNumberType" id="licenceNumber" class="form-control" v-model="form.jogositvany_szam">
      </div>

      <div style="font-weight: bolder; color: orange;" class="col-md-3 m-3 mb-3">
        <label for="phoneNumberInput" class="form-label">Telefonszám</label>
        <input type="phoneNumber" id="phoneNumberInput" class="form-control" v-model="form.telefonszam">
      </div>

      <div style="color: orange;" class="col-md-3 m-3">
        <label for="billingAddress" class="form-label">Számlázási cím</label>
        <input type="billingAddressType" id="billingAddress" class="form-control" v-model="form.szamlazasi_cim">
      </div>
    </div>

    <div class="mb-3 d-flex justify-content-center" style="margin-top: 0.5rem;">
      <!-- <button type="submit" class="btn btn-outline-secondary" @click="Register">Regisztráció</button> -->
      <input type="submit" class="btn btn-outline-secondary" value="Regisztráció"  @click="Register" >
    </div>
    <span v-for="error in v$.$errors" :key="error.$uid">
      {{ error.$property }} - {{ error.$message }}
    </span>
    <div class="mb-3 d-flex justify-content-center" style="font-weight: 400; font-size: 0.8rem;">
      Van már felhasználód?
      <div style="margin-left: 0.4rem;">
        <router-link to="/login" style="color: orange; text-decoration: none;">Kattints ide</router-link>
      </div>
    </div>

  </form>
</template>

<script setup>
import {ref,computed} from 'vue';
import axios from 'axios';
import useVuelidate from '@vuelidate/core';
import { required,email,minLength } from '@vuelidate/validators';





const form=ref({
  name:'',
  email:'',
  password:'',
  jogositvany_szam:'',
  telefonszam:'',
  szamlazasi_cim:'',
})

const rules= computed(()=>{
return{
  name:{required},
  email:{required,email},
  password:{required,minLength:minLength(8)},
  jogositvany_szam:{required},
  telefonszam:{required},
  szamlazasi_cim:{required},
}
})

const v$=useVuelidate(rules,form);


async function Register(){
  await axios.post('http://127.0.0.1:8000/api/register',form.value)
  console.log("ok");
  alert("Sikeres regisztráció csita!");
}


const SubmitEvent=async()=>{
  const result=await v$.value.$validate();
  if (result) {
    alert("jóó")
  }else{
    alert("nem jo")
  }
 
}

// const Register=async()=>{
//   console.log(form.value);
//   log = await axios.post('http://127.0.0.1:8000/api/register',{
//     name:form.value.name,
//     email:form.value.email,
//     password:form.value.password,
//     jogositvany_szam:form.value.jogositvany_szam,
//     telefonszam:form.value.telefonsza,
//     szamlazasi_cim:form.value.szamlazasi_cim,
//   });

//   console.log(log)
// }









</script>

<style scoped>
.btn {
  color: orange;
  font-family: fantasy;
}
</style>