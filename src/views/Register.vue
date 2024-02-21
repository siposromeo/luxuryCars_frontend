<template>
  <form class="mb-5 mt-5" style="text-align: center;">
    <div>
      <div class="mx-auto">
        <div>
        <div >
          <label for="nameInput" class="form-label" style="font-weight: bolder; color: orange;">Teljes név</label>
          <input type="name" class="form-control" id="nameInput">
        </div>
        <div>
          <label for="emailInput" class="form-label"
            style="color: orange; margin-bottom: 0.5rem; margin-top: 0.5rem;">Email
            cím</label>
          <input type="email" class="form-control" id="emailInput">
        </div>
        <div>
          <label for="inputPassword" class="form-label"
            style="font-weight: bolder; color: orange; margin-bottom: 0.5rem; margin-top: 0.5rem;">Jelszó</label>
          <input type="password" id="inputPassword" class="form-control">
        </div>
        <p style="font-size: 0.6rem;">
          FONTOS! A jelszavad legyen legalább 8 karakter.
        </p>
      </div>
      </div>

    </div>

    <div class="d-flex justify-content-center" style="padding-top: 0.1rem; margin-top: 0.1rem;">
      <div style="color: orange;" class="col-md-3 m-3">
        <label for="licenceNumber" class="form-label">Jogosítvány szám</label>
        <input type="licenceNumberType" id="licenceNumber" class="form-control">
      </div>

      <div style="font-weight: bolder; color: orange;" class="col-md-3 m-3 mb-3">
        <label for="phoneNumberInput" class="form-label">Telefonszám</label>
        <input type="phoneNumber" id="phoneNumberInput" class="form-control">
      </div>

      <div style="color: orange;" class="col-md-3 m-3">
        <label for="billingAddress" class="form-label">Számlázási cím</label>
        <input type="billingAddressType" id="billingAddress" class="form-control">
      </div>
    </div>

    <div class="mb-3 d-flex justify-content-center" style="margin-top: 0.5rem;">
      <button type="submit" class="btn btn-outline-secondary">Regisztráció</button>
    </div>

    <div class="mb-3 d-flex justify-content-center" style="font-weight: 400; font-size: 0.8rem;">
      Van már felhasználód?
      <div style="margin-left: 0.4rem;">
        <router-link to="/login" style="color: orange; text-decoration: none;">Kattints ide</router-link>
      </div>
    </div>

  </form>
</template>

<script setup>

</script>

<style scoped>
.btn {
  color: orange;
  font-family: fantasy;
}
</style>