<template>

  <div class="d-flex flex-column min-vh-100">
    <AppNav></AppNav>
    <main class="flex-grow-1">
    </main>
  <Footer></Footer>
  </div>
</template>

<script setup>
// import { RouterView, RouterLink } from 'vue-router'
import AppNav from '../src/components/navbar.vue'
import Footer from '../src/components/Footer.vue'
</script>

<style scoped>
.min-vh-100{
  min-height: 100vh;
}
</style>
