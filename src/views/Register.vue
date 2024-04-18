<template>
  <form class="mb-5 mt-4" style="text-align: center;" @submit.prevent="SubmitEvent">
    <div class="row-cols-3 w-100 d-flex justify-content-center">
    <div class="d-block mx-auto ms-auto">
        <div class="mb-4" style="font-weight: bolder; font-size: 2.1rem; color: orange;">Regisztráció</div>
        <div>
          <label for="nameInput" class="form-label">Teljes név</label>
          <input type="name" class="form-control w-100 m-auto" id="nameInput" v-model="form.name" required>
        </div>
        <div>
          <label for="emailInput" class="form-label mb-2 mt-2"
            >Email
            cím</label>
          <input type="email" class="form-control w-100 m-auto" id="emailInput" v-model="form.email" required maxlength="25">
        </div>
        <div>
          <label for="inputPassword" class="form-label mb-2 mt-2"
            >Jelszó</label>
          <input type="password" id="inputPassword" class="form-control w-100 m-auto" v-model="form.password" required minlength="8" maxlength="18">
        </div>
        <p class="mt-2" style="font-size: 0.9rem;">
          FONTOS! A jelszavad legyen legalább 8 karakter.
        </p>
      </div>
    </div>

    <div class="d-flex justify-content-center mt-1" style="padding-top: 0.1rem;">
      <div class="col-md-2 m-2">
        <label for="licenceNumber" class="form-label" style="letter-spacing: -1.1px;">Jogosítvány szám</label>
        <input type="licenceNumberType" id="licenceNumber" class="form-control" v-model="form.jogositvany_szam" required maxlength="14">
      </div>

      <div class="col-md-2 m-2 mb-3">
        <label for="phoneNumberInput" class="form-label">Telefonszám</label>
        <input type="tel" minlength="8" maxlength="12" id="phoneNumberInput" name="phone" class="form-control" v-model="form.telefonszam" required>
      </div>

      <div class="col-md-2 m-2 mb-3">
        <label for="billingAddress" class="form-label">Számlázási cím</label>
        <input type="billingAddressType" id="billingAddress" class="form-control" v-model="form.szamlazasi_cim" required maxlength="40">
      </div>
    </div>

    <div class="mb-2 d-flex justify-content-center mt-3" >
      <input type="submit" class="btn btn-outline-danger" value="Regisztráció" style="font-weight: 700; font-size: 1.2rem;">
    </div>

<div class="hiba" >
    <div v-for="error in v$.$errors" :key="error.$uid">
      <p class="m-0 p-1">{{ error.$message }}</p>
    </div>
  </div>  
    <div class="d-flex justify-content-center" style="font-weight: 400; font-size: 1rem;">
        Van már felhasználói fiókod?
      <div style="margin-left: 0.4rem;">
        <router-link to="/login" style="color: orange; text-decoration: none; font-weight: bolder;">Kattints ide</router-link>
      </div>
    </div>

  </form>
</template>

<script setup>
import {ref, computed} from 'vue';
import axios from 'axios';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength, maxLength, helpers } from '@vuelidate/validators';
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

const rules  = computed(() => {
return{
  name:{required:helpers.withMessage("Kötelező a név mezőt kitölteni",required)},
  email:{required:helpers.withMessage("Kötelező az email mezőt kitölteni",required), email:helpers.withMessage("Valódi emailt adjon meg!",email)},
  password:{required:helpers.withMessage("Kötelező a jelszó mezőt kitölteni",required), minLength:helpers.withMessage("A jelszónak legalább 8 karakternek kell lennie!",minLength(8))},
  jogositvany_szam:{required:helpers.withMessage("Kötelező a jogosítvány szám mezőt kitölteni", required)},
  telefonszam:{required:helpers.withMessage("Kötelező a telefonszám mezőt kitölteni",required), maxLength:helpers.withMessage("A telefonszám legalább 8 karakternek kell lennie!", maxLength(12))},
  szamlazasi_cim:{required:helpers.withMessage("Kötelező a számlázási cím mezőt kitölteni",required)},
};
});

const v$=useVuelidate(rules,form);

const SubmitEvent=async()=>{
  const result = await v$.value.$validate();
  if (result) {
    await axios.post('https://bgs.jedlik.eu/luxurycars/luxurycars/api/register',form.value)
  // console.log("ok");
  await alert("Sikeres regisztráció!");
  router.push("/login")
  }
  else{
    alert("Sikertelen regisztráció...")
  }
}
</script>

<style scoped>
form{
  font-family: "Jersey 10", sans-serif;
}
label{
  font-size: 1.3rem;
  color: orange;
  font-weight: 600;
}
.btn {
  color: orange;
}

.hiba{
  color:brown;
  width: 25%;
  margin: auto;
  padding: 10px;
  border-radius: 10px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input{
    border: 1px solid orange;
}
</style>