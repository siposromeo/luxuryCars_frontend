import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
import App from './App.vue';

import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


import PrimeVue from 'primevue/config';
import router from './router/router';

const app = createApp(App)
app.use(PrimeVue);

const pinia = createPinia()

pinia.use(piniaPluginPersistedState)

app.component('VueDatePicker', VueDatePicker);

app.use(pinia)

app.use(router)

app.mount('#app')
