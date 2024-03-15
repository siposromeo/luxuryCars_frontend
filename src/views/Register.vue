<template>
  <form class="mb-5 mt-5" style="text-align: center;" @submit.prevent="SubmitEvent">
    <div class="row-cols-3 m-2 d-flex mt-1 rounded">
    <div class="mx-auto ms-auto m-lg-auto">
        <div class="mb-5 mt-1" style="font-weight: bolder; font-size: 1.5rem; color: orange;">Regisztráció</div>
        <div>
          <label for="nameInput" class="form-label" style="font-weight: bolder; color: orange;">Teljes név</label>
          <input type="name" class="form-control w-50 m-auto" id="nameInput" v-model="form.name" required>
        </div>
        <div>
          <label for="emailInput" class="form-label"
            style="color: orange; margin-bottom: 0.5rem; margin-top: 0.5rem;">Email
            cím</label>
          <input type="email" class="form-control w-50 m-auto" id="emailInput" v-model="form.email" required>
        </div>
        <div>
          <label for="inputPassword" class="form-label"
            style="font-weight: bolder; color: orange; margin-bottom: 0.5rem; margin-top: 0.5rem;">Jelszó</label>
          <input type="password" id="inputPassword" class="form-control w-50 m-auto" v-model="form.password" required>
        </div>
        <p style="font-size: 0.6rem;">
          FONTOS! A jelszavad legyen legalább 8 karakter.
        </p>
      </div>
    </div>

    <div class="d-flex justify-content-center" style="padding-top: 0.1rem; margin-top: 0.1rem;">
      <div style="color: orange;" class="col-md-2 m-3">
        <label for="licenceNumber" class="form-label" style="letter-spacing: -1.1px;">Jogosítvány szám</label>
        <input type="licenceNumberType" id="licenceNumber" class="form-control" v-model="form.jogositvany_szam" required>
      </div>

      <div style="font-weight: bolder; color: orange;" class="col-md-2 m-3 mb-3">
        <label for="phoneNumberInput" class="form-label">Telefonszám</label>
        <input type="phoneNumber" id="phoneNumberInput" class="form-control" v-model="form.telefonszam">
      </div>

      <div style="color: orange;" class="col-md-2 m-3">
        <label for="billingAddress" class="form-label">Számlázási cím</label>
        <input type="billingAddressType" id="billingAddress" class="form-control" v-model="form.szamlazasi_cim">
      </div>
    </div>

    <div class="mb-4 d-flex justify-content-center" style="margin-top: 0.5rem;">
      <!-- <button type="submit" class="btn btn-outline-secondary" @click="Register">Regisztráció</button> -->
      <input type="submit" class="btn btn-outline-secondary" value="Regisztráció">
      <!-- <input type="submit" class="btn btn-outline-secondary" value="Regisztráció"  @click="Register" > -->
    </div>

<div class="hiba" >

    <div v-for="error in v$.$errors"  :key="error.$uid">
      <p class="m-0 p-1">{{ error.$message }}</p>
      <!-- <ul>
        <li>
          <b>{{ error.$message }}</b>
        </li>
      </ul> -->
    </div>
  </div>  
    <div class="d-flex justify-content-center" style="font-weight: 400; font-size: 0.8rem;">
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
import { required,email,minLength,helpers } from '@vuelidate/validators';
import { useRouter } from 'vue-router';
 
let router = useRouter();

const form=ref({
  name:'',
  email:'',
  password:'',
  jogositvany_szam:'',
  telefonszam:'',
  szamlazasi_cim:'',
})

// minLength(8)

const rules = computed(() => {
return{
  name:{required:helpers.withMessage("Kötelező a név mezőt kitölteni",required)},
  email:{required:helpers.withMessage("Kötelező az email mezőt kitölteni",required),email:helpers.withMessage("Valódi emailt adjon meg!",email)},
  password:{required:helpers.withMessage("Kötelező a jelszó mezőt kitölteni",required),minLength:helpers.withMessage("A jelszónak legalább 8 karakternek kell lennie!",minLength(8))},
  jogositvany_szam:{required:helpers.withMessage("Kötelező a jogosítvány szám mezőt kitölteni",required)},
  telefonszam:{required:helpers.withMessage("Kötelező a telefonszám mezőt kitölteni",required)},
  szamlazasi_cim:{required:helpers.withMessage("Kötelező a számlázási cím mezőt kitölteni",required)},
};
});
const v$=useVuelidate(rules,form);

const SubmitEvent=async()=>{
  const result=await v$.value.$validate();
  if (result) {
    await axios.post('http://127.0.0.1:8000/api/register',form.value)
  // console.log("ok");
  await alert("Sikeres regisztráció!");
  router.push("/login")
  }
  else{
    alert("Sikertelen regisztráció...")
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

.hiba{
  font-family: fantasy;
  color:brown;
  width: 25%;
  margin: auto;
  padding: 10px;
  border-radius: 10px;
  
}
</style>