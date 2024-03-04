<template>
    <form style="text-align: center; margin-top: 3rem;" @submit.prevent="SubmitEvent">
        <div>
            <div>
                <label for="emailInput" class="form-label" style="color: orange;">Email cím</label>
                <input type="email" class="form-control" id="emailInput" v-model="form.email">
            </div>
            <div>
                <label for="inputPassword" class="form-label"
                    style="font-weight: bolder; color: orange; margin-bottom: 0.5rem; margin-top: 0.5rem;">Jelszó</label>
                <input type="password" id="inputPassword" class="form-control" v-model="form.password">
            </div>
            <div class="mb-3 d-flex justify-content-center">
                <!-- <button type="submit" class="btn btn-outline-secondary" style="margin-top: 1rem;" @submit="Login">Bejelentkezés</button> -->
                <input type="submit" class="btn btn-outline-secondary" value="Belépés"   >

            </div>
        </div>


        <div class="mb-3 d-flex justify-content-center" style="font-weight: 400; font-size: 0.8rem;">
            Nincs még nálunk felhasználód?
            <div style="margin-left: 0.4rem;">
                <router-link to="/registration" style="color: orange; text-decoration: none;">Kattints ide</router-link>
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
  password:''
})

const rules= computed(()=>{
return{
  email:{required:helpers.withMessage("Kötelező az email mezőt kitölteni",required),email},
  password:{required:helpers.withMessage("Kötelező a jelszó mezőt kitölteni",required),minLength:minLength(8)},
};
});

const v$=useVuelidate(rules,form);





const SubmitEvent=async()=>{
  const result=await v$.value.$validate();
  if (result) {
    let req=await axios.post('http://127.0.0.1:8000/api/login',form.value)
    console.log(req)
    if (req.user) {
        await alert("sikertelen belépés csita!");
        console.log(req);
        return
    }
    console.log("ok");
    await alert("Sikeres belépés csita!");
    router.push("/car")
  }else{
    alert("Sikertelen regisztráció")
  }
 
}


async function Login(){
    
    await axios.post('http://127.0.0.1:8000/api/login',form.value)
    console.log("ok");
    await alert("Sikeres belépés csita!");
    router.push("/car")
}









</script>

<style scoped>
.btn {
    color: orange;
    font-family: fantasy;
}
</style>