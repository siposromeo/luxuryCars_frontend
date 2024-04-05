<template>
  <div class="mt-3">
    <h1>Rólunk</h1>
  </div>
  <div class="container mb-3 justify-content-center">
    <div class="mb-5 justify-content-center">
      <p>A tervünk az, hogy egy egyszerű és letisztult weboldalt alkossunk, ami megálja a helyét az
        osztálytársaink és évfolyamtársai weboldalai mellett is. Szeretnénk, hogy a weboldal használatának élménye
        legyen
        könnyű és magától érthető. Szerény véleményünk szerintünk lenne jelentős igény különböző szuper kategóriás autók
        kibérlésére. Közlekedés szerves része napjainknak, miért is ne lehetne, hogy azokat az utakat valami igazán
        különleges járműben tegyük meg.
      </p>
      <h3>A rendelés folyamata</h3>
      <p class="mb-5">Közel 30 autó áll rendelkezésre, amely csak arra vár, hogy kipróbálja őket. Válassza ki a
        kiválasztott autót, jelölje ki az időtartamot mikor szeretné az autót használni. És mi felvesszük a kapcsolatot
        Önnel email formájában.
      </p>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 card">
        <div class="card-body">
          <h5 class="card-title">Sipos Rómeó</h5>
          <p class="card-text">A LuxuryCars Hungary megalkotója.<br>Full-stack developer és csapat-vezető.</p>
          <div class="d-grid m-2">
            <a href="https://github.com/siposromeo" target="_blank" class="btn btn-secondary">Github</a>
          </div>
          <div class="d-grid m-2">
            <a href="" target="_blank" class="btn btn-primary">Facebook</a>
          </div>
          <div class="d-grid m-2">
            <a href="" target="_blank" class="btn btn-info">Twitter</a>
          </div>
          <p class="phonenum">Telefonszám: +36 70 111 0000</p>
        </div>
      </div>
      <div class="col-12 col-md-6 card" id="card">
        <div class="card-body">
          <h5 class="card-title">Ősze Benedek</h5>
          <p class="card-text">Mobil-alkalmazás fejlesztő és tesztelő, <br>marketing szakértő, stílus-manager.</p>
          <div class="d-grid m-2">
            <a href="https://github.com/NMTHFTR" target="_blank" class="btn btn-secondary">Github</a>
          </div>
          <div class="d-grid m-2">
            <a href="https://www.snapchat.com/add/lanarhoades?web_client_id=49bab0ae-aeb0-4ac4-9cb6-3d237046dc72"
              target="_blank" class="btn btn-warning">SnapChat</a>
          </div>
          <div class="d-grid m-2">
            <a href="https://steamcommunity.com/id/love_sosa/" target="_blank" class="btn btn-dark">Steam</a>
          </div>
          <p class="phonenum">Telefonszám: +36 70 222 1111</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.phonenum {
  font-size: 1rem;
  font-weight: 700;
}

h1 {
  font-size: 2.3rem;
  font-weight: 700;
  font-style: oblique;
  text-align: center;
  margin-top: 0.3rem;
  margin-bottom: 0.7rem;
  color: orange;
  letter-spacing: 1.7rem;
}
h3{
  font-size: 1.7rem;
  letter-spacing: 0.3rem;
  font-weight: 200;
  text-align: center;
}

h5 {
  letter-spacing: 0.2rem;
  font-style: italic;
  color: orange;
  font-family: fantasy;
}

.card {
  border-style: none;
  text-align: center;
}
</style>