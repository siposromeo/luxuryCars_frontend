<template>
    <form class="position-absolute top-50 start-50 translate-middle" style="text-align: center; margin-top: 3rem;">
        <div>
            <div>
                <label for="emailInput" class="form-label" style="color: orange;">Email cím</label>
                <input type="email" class="form-control" id="emailInput">
            </div>
            <div>
                <label for="inputPassword" class="form-label"
                    style="font-weight: bolder; color: orange; margin-bottom: 0.5rem; margin-top: 0.5rem;">Jelszó</label>
                <input type="password" id="inputPassword" class="form-control">
            </div>
            <div class="mb-3 d-flex justify-content-center">
                <button type="submit" class="btn btn-outline-secondary" style="margin-top: 1rem;">Bejelentkezés</button>
            </div>
        </div>


        <div class="mb-3 d-flex justify-content-center row" style="font-weight: 400; font-size: 0.8rem;">
            Nincs még nálunk felhasználód?
            <div style="margin-left: 0.4rem;">
                <router-link to="/registration" style="color: orange; text-decoration: none;">Kattints ide</router-link>
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