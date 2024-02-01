<template>
  <div class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div>
        <img src="../public/letter-c.png" class="justify-content-start" id="kep">
        <a class="navbar-brand p-2" id="focim">LuxuryCars Rental</a>
      </div>
      <ul class="nav">
        <li class="nav-item">
          <!-- ROUTERLINK -->
          <a class="nav-link active" id="menupont" href="#">Kezdőlap</a>
        </li>
        <li class="nav-item">
          <!-- ROUTERLINK -->
          <a class="nav-link" id="menupont" href="#">Autóink</a>
        </li>
        <li class="nav-item">
          <!-- ROUTERLINK -->
          <a class="nav-link" id="menupont" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <!-- ROUTERLINK -->
          <a class="nav-link" id="menupont" href="#">Felhasználó</a>
        </li>
      </ul>
    </div>
  </div>

  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
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
