<template>
    <form style="text-align: center;" @submit.prevent="SubmitEvent" class="mb-5 mt-4">
        <div>
            <div class="mb-4" style="font-weight: bolder; font-size: 2.1rem; color: orange;">Bejelentkezés</div>
            <div>
                <label for="emailInput" class="form-label" style="color: orange;">Email cím</label>
                <input type="email" class="form-control w-50 m-auto" id="emailInput" v-model="form.email">
            </div>
            <div>
                <label for="inputPassword" class="form-label" style="color: orange; margin-bottom: 0.5rem; margin-top: 0.5rem;" required>Jelszó</label>
                <input type="password" id="inputPassword" class="form-control w-50 m-auto" v-model="form.password">
            </div>
            <div class="mb-3 d-flex justify-content-center">
                <input type="submit" class="btn btn-outline-secondary mt-4" value="Belépés">
            </div>
        </div>
        <div class="hiba">

<div v-for="error in v$.$errors" :key="error.$uid">
  <p class="m-0 p-1">{{ error.$message }}</p>
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
import {useUserStorage} from '../stores/userstore';
 
const userstore = useUserStorage();
let router = useRouter();
const form=ref({
  name:'',
  password:''
})

const rules= computed(()=>{
return{
    email:{required:helpers.withMessage("Kötelező az email mezőt kitölteni",required),email:helpers.withMessage("Valódi emailt adjon meg!", email)},
    password:{required:helpers.withMessage("Kötelező a jelszó mezőt kitölteni",required),minLength:helpers.withMessage("A jelszónak legalább 8 karakternek kell lennie!", minLength(8))},
};
});

const v$=useVuelidate(rules, form);
const SubmitEvent = async() => {
  const result=await v$.value.$validate();
  if (result) {
    let req = null
    try {
        req = await axios.post('https://bgs.jedlik.eu/luxurycars/luxurycars/api/login', form.value)
    } catch (error) {
        // console.log(error)
        await alert("Sikertelen belépés! Próbáld újra!")
    }
        if (req){
            userstore.setUser(req.data.user)
            userstore.setToken(req.data.token)
            userstore.setLoggedIn(true)
            router.push("/car")
            // console.log(req);
            return
        }
    }
    else{
    alert("Sikertelen regisztráció")
    }
}
</script>

<style scoped>
label{
  font-size: 1.3rem;
  color: orange;
  font-weight: 600;
  font-family: "Jersey 10", sans-serif;
}
form{
    font-family: "Jersey 10", sans-serif;
}
.btn {
    color: orange;
    font-family: "Jersey 10", sans-serif;
    font-size: larger;
    font-weight: 500;
}

.hiba{
    font-family: "Jersey 10", sans-serif;
  color:brown;
  width: 25%;
  margin: auto;
  padding: 10px;
  border-radius: 10px;
  
}
input{
    border: 1px solid orange;
}
</style>