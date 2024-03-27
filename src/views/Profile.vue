<template>
    <div class="row row-cols-1 m-3 d-flex rounded card-group">
      <h1>Profil és módosítás</h1>
      <div>
        <label>Name:</label>
        <input type="text" v-model="userData.name" :disabled="!isEditMode" />
      </div>
      <div>
        <label>Driving License Number:</label>
        <input type="text" v-model="userData.drivingLicense" :disabled="!isEditMode" />
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="tel" v-model="userData.phoneNumber" :disabled="!isEditMode" />
      </div>
      <div>
        <label>Billing Address:</label>
        <input type="text" v-model="userData.billingAddress" :disabled="!isEditMode" />
      </div>
      <button @click="toggleEditMode">{{ isEditMode ? 'Save Changes' : 'Edit Profile' }}</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useUserStorage } from '@/stores/userstore';

  const userstore = useUserStorage();
  const isEditMode = ref(false);

  const userData = userstore.userData;

  const toggleEditMode = () => {
    isEditMode.value = !isEditMode.value;
    };
  </script>

<style scoped>
body{
    margin-top:20px;
    color: #1a202c;
    text-align: left;
    background-color: #e2e8f0;    
}
.main-body {
    padding: 15px;
}
.card {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 2 solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}

.gutters-sm {
    margin-right: -8px;
    margin-left: -8px;
}

.gutters-sm>.col, .gutters-sm>[class*=col-] {
    padding-right: 8px;
    padding-left: 8px;
}
.mb-3, .my-3 {
    margin-bottom: 1rem!important;
}

.bg-gray-300 {
    background-color: #e2e8f0;
}
.h-100 {
    height: 100%!important;
}
.shadow-none {
    box-shadow: none!important;
}
</style>