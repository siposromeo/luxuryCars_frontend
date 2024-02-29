import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'


import PrimeVue from 'primevue/config';
import router from './router/router';

const app = createApp(App)
app.use(PrimeVue);

app.use(createPinia())

app.use(router)

app.mount('#app')
