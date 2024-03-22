<template>
  <body>
    <header>
      <figure class="brand">
        <RouterLink class="a" to="/">LuxuryCars</RouterLink>
      </figure>
      <nav class="menu">
        <input type="checkbox" id="menuToggle">
        <label for="menuToggle" class="menu-icon"><i class="fa fa-bars"></i></label>
        <ul class="justify-content-end">
          <li>
          <RouterLink class="a" to="/car">Autóink</RouterLink>
        </li>
        <li>
          <RouterLink class="a" to="/contact">Team</RouterLink>
        </li>
        <li>
          <RouterLink class="a" to="/login" v-if="!userstore.isLoggedIn">Bejelentkezés</RouterLink>
        </li>
        <li>
          <RouterLink class="a" to="/registration" v-if="!userstore.isLoggedIn">Regisztráció</RouterLink>
        </li>
        <li>
          <RouterLink class="a" to="/profile" v-if="userstore.isLoggedIn">Profil</RouterLink>
        </li>
        <li>
          <RouterLink class="a" to="/" @click="logout()" v-if="userstore.isLoggedIn">Kijelentkezés</RouterLink>
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
import axios from 'axios';
const userstore = useUserStorage();


async function logout() {
  const req = await axios.post('http://127.0.0.1:8000/api/logout','',{headers:{'Authorization': `Bearer ${userstore.token}`}})
  userstore.setUser(null)
  userstore.setLoggedIn(false)
  userstore.setToken('')
  }
</script>
  
<style scoped>
html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    text-shadow: 1.2px 1px 10px #000;
}
a {
  color: #222;
    text-decoration: none;
}
li {
    list-style: none;
    margin: auto;
}
header {
    width: 100%;
    height: 54px;
    line-height: 54px;
    text-align: center;
    font-family: fantasy;
    background-color: #f1c40f;
}
.brand {
    width: auto;
    text-decoration: none;
    font-family: fantasy;
    font-size: 1.8rem;
    color: #222;
    height: 100%;
    float: left;
    margin: 0 0 0 3.8rem;
    letter-spacing: 0.6cap;
}
.menu {
    width: 40%;
    height: 100%;
    float: right;
    letter-spacing: 0.2cap;
}
.menu ul {
    width: 100%;
    height: 50%;
    margin: auto;
    padding: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
.menu ul a {
    width: auto;
    color: #222;
    display: inherit;
    padding: 3px 2px;
}
.menu ul a:hover {
    background-color: #222;
    color: #f1c40f;
    line-height: 48px;
}
#menuToggle {
    display: none;
}
.menu-icon {
    display: none;
    cursor: pointer;
}
@media screen and (max-width: 768px) {
    .menu {
        width: 100%;
        height: auto;
    }
    .menu ul {
        display: block;
        max-height: 0;
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
        margin-bottom: 5px;
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
        max-height: 350px;
    }
    .menu-icon i {
        font-size: 1.7em;
    }
}
</style>
  