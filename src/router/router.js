import { createRouter, createWebHistory } from 'vue-router';
import CarViewVue from '../views/CarView.vue';
import ContactVue from '../views/Contact.vue';
import ProfileVue from '../views/Profile.vue';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/car',
            name: 'Cars',
            component: CarViewVue
        },
        {
            path: '/contact',
            name: 'Contact',
            component: ContactVue
        },
        {
            path: '/profile',
            name: 'Profile',
            component: ProfileVue
        },
    ],
});
export default router;