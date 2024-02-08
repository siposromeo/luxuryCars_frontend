<template>
    <div class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <div>
          <img src="../public/letter-c.png" class="m-2" id="kep">
          <a class="navbar-brand p-1" id="focim">LuxuryCars Rental</a>
        </div>
        <div class="navbar-center">
          <ul class="nav">
            <li class="nav-item">
              <!-- ROUTERLINK -->
              <RouterLink class="nav-link active" to="/" id="menupont">Kezdőlap</RouterLink>
            </li>
            <li class="nav-item">
              <!-- ROUTERLINK -->
              <RouterLink class="nav-link active" id="menupont" to="/car">Autóink</RouterLink>
            </li>
            <li class="nav-item">
              <!-- ROUTERLINK -->
              
              <a class="nav-link" id="menupont" href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div class="navbar-right">
          <li class="nav">
            <!-- ROUTERLINK -->
            <a class="nav-link" id="menupont" href="#">Felhasználó</a>
          </li>
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
  