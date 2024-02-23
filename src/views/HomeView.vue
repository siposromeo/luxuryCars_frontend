<template>

<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://s1.cdn.autoevolution.com/images/gallery/Mercedes-AMG-GT-R-Roadster-6538_23.jpg" class="d-block">
    </div>
    <div class="carousel-item">
      <img src="https://s1.cdn.autoevolution.com/images/gallery/BMW-M8-Coupe-6590_26.jpg" class="d-block">
    </div>
    <div class="carousel-item">
      <img src="https://s1.cdn.autoevolution.com/images/gallery/audi-r8-v10-performance-rwd-spyder-2021-7219_19.jpg" class="d-block">
    </div>
    <div class="carousel-item">
      <img src="https://s1.cdn.autoevolution.com/images/gallery/MASERATI-GranTurismo-6046_21.jpg" class="d-block">
    </div>
  </div>
  <button class="carousel-control-prev position-inherit " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<!-- <div class="card-group">
  <div class="card">
    <h1 class="text-center mt-5">30 db</h1>
    <div class="card-body">
      <h5 class="card-title text-center">Auto áll készen, arra hogy kibereld őket
      </h5>
    </div>
  </div>
  <div class="card">
      <ion-icon class="icon" name="stopwatch-outline"></ion-icon>
    <div class="card-body">
      <h5 class="card-title text-center">Azonnali foglalás</h5>
    </div>
  </div>
  <div class="card">
    <h1 class="text-center mt-5">2 év</h1>
    <div class="card-body">
      <h5 class="card-title text-center">Tapasztalat</h5>
    </div>
  </div>
</div> -->




<!-- <div class="card-group">
  <div class="card">
    <img src="https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1685458010/autoexpress/2023/05/Porsche%20911%20GTS%20UK%20001_otx6j7.jpg" class="w-100" alt="...">
  </div>
  <div class="card">
    <div class="card-body">
      <h1 class="m-5 text-center" style="font-family: fantasy; letter-spacing: 0.2rem;">Béreld ki akár most álomautodat</h1>
      <h1 class="text-center mt-5">Regisztrálj most</h1>
      <RouterLink class="btn btn-warning p-3 m-5" style="font-family: fantasy; " to="/registration">Regisztráció</RouterLink>
      </div>
  </div>
  </div>



  <div class="card-group">
  <div class="card">
    <div class="card-body">
      <h1 class="text-center mt-5" style="font-family: fantasy; letter-spacing: 0.4rem;">Nagy választék:</h1>
      <RouterLink class="btn btn-warning p-3 m-5" style="font-family: fantasy;" to="/car">Foglald le most</RouterLink>
      </div>
  </div>
  <div class="card">
    <img src="https://s1.cdn.autoevolution.com/images/gallery/LEXUS-LFA-4155_22.jpg" class="w-100" alt="...">
  </div>
  </div>


  
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
</div> -->



   



  

</template>

<script setup>
import { ref,onMounted } from 'vue';
import CarService from '../services/carservice'

const cars = ref();

onMounted(()=>{CarService.getAllCars()
  .then(response => {
    cars.value = response;
    console.log(response);
  })})


</script>

<style scoped>
.icon{
  width: auto;
  height: 35%;
  margin: 25px;
}
@media only screen and (max-width: 480px) {
img {
width: 100%;
}
}

</style>