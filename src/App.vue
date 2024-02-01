<template>
  <div class="navbar navbar-expand-lg bg-body-tertiary">
    <div>
      <a class="navbar-brand m-2">LuxuryCars Rental</a>
    </div>
    <div class="container-fluid justify-content-end">
      <ul class="nav">
        <li class="nav-item">
          <!-- ROUTERLINK -->
          <a class="nav-link active" href="#">Kezdőlap</a>
        </li>
        <li class="nav-item">
          <!-- ROUTERLINK -->
          <a class="nav-link" href="#">Autóink</a>
        </li>
        <li class="nav-item">
          <!-- ROUTERLINK -->
          <a class="nav-link" href="#">Contact</a>
        </li>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <!-- ROUTERLINK -->
            <a class="nav-link" href="#">Felhasználó</a>
          </li>
        </ul>
      </ul>
    </div>
  </div>

  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style scoped></style>
