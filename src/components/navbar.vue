<template>
  <div class="navbar navbar-expand-lg ">
    <div class="container">
      <div class="navbar-center">
        <ul class="nav">
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/" id="menupont">Kezdőlap</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" id="menupont" to="/car">Autóink</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" id="menupont" to="/contact">Elérhetőségek</RouterLink>
          </li>
        </ul>
      </div>
      <div class="dropdown navbar-right">
        <button class="btn dropdown-toggle" id="menupont" type="button" data-bs-toggle="dropdown">
          Felhasználó
        </button>
        <ul class="dropdown-menu" id="menupont">
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
#kep {
  width: 40px;
  height: 40px;
}

#focim {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: bolder;
  text-shadow: 1.1px 1.1px black;
  font-size: 1.5rem;
}

#menupont {
  font-family: Arial, Helvetica, sans-serif;
  color: orange;
  text-decoration: none;
  font-size: large;
}
</style>
  