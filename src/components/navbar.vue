<template>
  <div class="navbar navbar-expand-lg">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="" id="navbarSupportedContent">
        <ul class="nav">
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/" id="menupont">Kezdőlap</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" id="menupont" to="/car">Autóink</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" id="menupont" to="/contact">A csapatról</RouterLink>
          </li>
        </ul>
      </div>
      
      <div class="dropdown navbar">
        <button class="btn dropdown" id="menupont" type="button" data-bs-toggle="dropdown">
          <ion-icon class="icon" name="person-circle-outline"></ion-icon>
        </button>
        <ul class="dropdown-menu" :style="{ right: 0, left: 'auto'}" id="menupont">
          <li class="dropdown-item">
            <RouterLink class="nav-link active" id="menupont" to="/login">Bejelentkezés</RouterLink>
          </li>
          <li class="dropdown-item">
            <RouterLink class="nav-link active" id="menupont" to="/registration">Regisztráció</RouterLink>
          </li>
        </ul>
      </div>
    </div>

  </div>
  <RouterView />
</template>
  
<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>
  
<style scoped>

#menupont {
  font-family: fantasy;
  color: orange;
  text-decoration: none;
  font-size: large;
}
.icon{
  width: 35px;
  height: 35px;
}
</style>
  