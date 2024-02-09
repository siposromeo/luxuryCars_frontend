<template>
  <form class="position-absolute top-50 start-50 translate-middle" style="text-align: center;">
    <div>
      <label for="nameInput" class="form-label" style="font-weight: bolder; color: orange;">Teljes név</label>
      <input type="name" class="form-control" id="nameInput">
    </div>
    <div>
      <label for="emailInput" class="form-label" style="color: orange;">Email cím</label>
      <input type="email" class="form-control" id="emailInput">
    </div>
    <div>
      <label for="inputPassword" class="form-label" style="font-weight: bolder; color: orange;">Jelszó</label>
      <input type="password" id="inputPassword" class="form-control">
    </div>
    <div>
      <label for="inputPasswordAgain" class="form-label" style="color: orange;">Jelszó újra</label>
      <input type="password" id="inputPasswordAgain" class="form-control">
      <div id="passwordHelpBlock" class="form-text">
        <p style="font-size: 0.7rem;">
          FONTOS! A jelszavad legyen legalább 8 karakter.
        </p>
      </div>
    </div>
    <div>

    </div>
    <div class="mb-3 d-flex justify-content-center">
      <button type="submit" class="btn btn-outline-secondary">Regisztráció</button>
    </div>
  </form>
</template>

<script setup>

</script>

<style scoped>
.btn {
  color: orange;

}
</style>