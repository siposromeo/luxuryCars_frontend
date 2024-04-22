<template>
  <body>
    <header>
      <figure class="brand">
        <RouterLink to="/">LuxuryCars</RouterLink>
      </figure>
      <nav class="menu">
        <input type="checkbox" id="menuToggle" v-model="checked"/>
        <label for="menuToggle" class="menu-icon"><i class="fa fa-bars"></i></label>
        <ul>
          <li v-if="userstore.isLoggedIn && userData.user.role == 1">
            <RouterLink @click="checked=false" class="a" to="/admin">Admin</RouterLink>
          </li>
          <li>
          <RouterLink @click="checked=false" class="a" to="/car">Autóink</RouterLink>
        </li>
        <li>
          <RouterLink @click="checked=false" class="a" to="/contact">Team</RouterLink>
        </li>
        <li v-if="!userstore.isLoggedIn">
          <RouterLink @click="checked=false" class="a" to="/login">Bejelentkezés</RouterLink>
        </li>
        <li v-if="!userstore.isLoggedIn">
          <RouterLink @click="checked=false" class="a" to="/registration">Regisztráció</RouterLink>
        </li>
        <li>
          <RouterLink @click="checked=false" class="a" to="/profile" v-if="userstore.isLoggedIn" collapse>Profil</RouterLink>
        </li>
        <li>
          <RouterLink  class="a" to="/" @click="logout()" v-if="userstore.isLoggedIn">Kijelentkezés</RouterLink>
        </li>
        </ul>
      </nav>
    </header>
  </body>
  <RouterView />
</template>
  
<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { useUserStorage } from '@/stores/userstore';
import Axios from 'axios';
import {ref} from 'vue'
const userstore = useUserStorage();
const userData = userstore
const checked = ref(false)
async function logout() {
  const req = await Axios.post('/logout','' ,{headers:{'Authorization': `Bearer ${userstore.token}`}});
  // console.log(req);
  userstore.setUser(null)
  userstore.setLoggedIn(false)
  userstore.setToken('')
  checked.value = false
  }
</script>
  
<style scoped>
html, body{
    width: 100%;
    height: 100%;
    padding: 0;
    text-transform: uppercase;
    text-shadow: 1.2px 1px 10px #000;
    font-family: "Jersey 10", sans-serif;
    user-select: none;
}
a {
  color: #222;
  text-decoration: none;
  justify-content: space-between;
}
li {
    list-style: none;
    margin: auto;
}
header {
    width: 100%;
    height: 55px;
    line-height: 52px;
    font-size: 1rem;
    background-color: #f1c40f;
}
.brand {
    width: auto;
    font-size: 2.7rem;
    margin: auto;
    color: #222;
    height: 100%;
    float: left;
    margin: 0 0 0 2.5rem;
}
.menu {
    width: 660px;
    height: 100%;
    float: right;
}
.menu ul {
    width: 100%;
    height: 60%;
    padding: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
.menu ul a {
    width: 100%;
    color: black;
    display: inherit;
    font-size: 30px;
}
#menuToggle {
    display: none;
}
.menu-icon {
    display: none;
    cursor: pointer;
}
@media screen and (max-width: 992px) {
    .menu {
        width: 100%;
        height: auto;
        user-select: none;
    }
    .menu ul {
        display: block;
        max-height: 0;
        flex-direction: column;
    	overflow: hidden;
    	-webkit-transition: max-height 0.3s;
    	-moz-transition: max-height 0.3s;
        -ms-transition: max-height 0.3s;
        -o-transition: max-height 0.3s;
    	transition: max-height 0.3s;
    }
    .menu ul a {
        text-align: center;
        width: 100%;
        height: 50px;
        margin-bottom: 3px;
    }
    .menu-icon {
        width: 100px;
        height: inherit;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        line-height: 60px;
    }
    #menuToggle:checked ~ ul {
        max-height: 330px;
        margin-bottom: 10px;
        transition: ease-in-out 0.5s;
    }
    .menu-icon i {
        font-size: 1.7em;
    }
}
</style>
  