<template>
  <body>
    <header>
      <figure class="brand">
        <RouterLink class="a" to="/">LuxuryCars</RouterLink>
      </figure>
      <nav class="menu">
        <input type="checkbox" id="menuToggle">
        <label for="menuToggle" class="menu-icon"><i class="fa fa-bars"></i></label>
        <ul class="justify-content-around">
          <li>
          <RouterLink class="a" to="/car">Autóink</RouterLink>
        </li>
        <li>
          <RouterLink class="a" to="/contact">A csapatról</RouterLink>
        </li>
        <li>
          <RouterLink class="a" to="/login">Bejelentkezés</RouterLink>
        </li>
        <li>
          <RouterLink class="a" to="/registration">Regisztráció</RouterLink>
        </li>
        </ul>
      </nav>
    </header>
  </body>
  <RouterView />
</template>
  
<script setup>
import { RouterView, RouterLink } from 'vue-router'

</script>
  
<style scoped>
html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
a {
  color: #222;
    text-decoration: none;
}
li {
    list-style: none;
}
header {
    width: 100%;
    height: 54px;
    line-height: 48px;
    text-align: center;
    font-family: fantasy;
    background-color: #f1c40f;
}
.brand {
    width: auto;
    text-decoration: none;
    font-family: fantasy;
    font-size: 1.7rem;
    color: #222;
    height: 100%;
    float: left;
    margin: 0 0 0 5rem;
}
.menu {
    width: 38%;
    height: 100%;
    float: right;
}
.menu ul {
    width: 100%;
    height: 50%;
    margin: 0;
    padding: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
.menu ul a {
    width: auto;
    color: #222;
    display: inherit;
    padding: 3px 2px;
}
.menu ul a:hover {
    background-color: #222;
    color: #f1c40f;
}
#menuToggle {
    display: none;
}
.menu-icon {
    display: none;
}
@media screen and (max-width: 768px) {
    .menu {
        width: 100%;
        height: auto;
    }
    .menu ul {
        display: block;
        max-height: 0;
    	overflow: hidden;
    	-webkit-transition: max-height 0.3s;
    	-moz-transition: max-height 0.3s;
        -ms-transition: max-height 0.3s;
        -o-transition: max-height 0.3s;
    	transition: max-height 0.3s;
    }
    .menu ul a {
        text-align: center;
        width: 100%;
        height: 50px;
    }
    .menu-icon {
        width: 100px;
        height: inherit;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        line-height: 60px;
    }
    #menuToggle:checked ~ ul {
        max-height: 350px;
    }
    .menu-icon i {
        font-size: 1.7em;
    }
}

/* body{
  height: 100vh;
  background-color: btn-primary;
}
li{
  list-style: none;
}
#RouterLink{
  text-decoration: none;
  color: orange;
  font-size: 1rem;
}
#RouterLink:hover{
  color:black
}
header{
  position: relative;
  padding: 0 2rem;
}
.navbar{
  width: 100%;
  height: 60px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar .logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: orange;
}
.navbar .links{
  display: flex;
  gap: 2rem;
}
.navbar .toggle_btn{
  color: orange;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
}

.dropdown_menu{
  position: absolute;
  right: 2rem;
  top: 60px;
  width: 300px;
  background: rgb(255, 255, 255);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  overflow: hidden;
  transition: height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.dropdown_menu li{
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media(max-width: 920px){
  .navbar .links{
    display: none;
  }
  .navbar .toggle_btn{
    display: block;
  }
  .dropdown_menu{
    display: block;
  }
} */

/* #menupont {
  font-family: fantasy;
  color: orange;
  text-decoration: none;
  font-size: large;
} */
/* .icon {
  width: 35px;
  height: 35px;
} */</style>
  