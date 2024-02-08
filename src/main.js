import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import PrimeVue from 'primevue/config';
import router from './router/router';

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue);

app.use(router)

app.mount('#app')
