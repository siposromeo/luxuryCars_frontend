import { createRouter, createWebHistory } from 'vue-router';
import CarViewVue from '../views/CarView.vue';
import ContactVue from '../views/Contact.vue';
import ProfileVue from '../views/Profile.vue';
import HomeView from '../views/HomeView.vue';
import LoginVue from '@/views/Login.vue';
import RegisterVue from '@/views/Register.vue';
import CalenderRent from '@/views/CalenderRent.vue';
import AdminPage from '@/views/AdminPage.vue';

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
        {
            path: '/login',
            name: 'Login',
            component: LoginVue
        },
        {
            path: '/logout',
            name: 'Logout'
        },
        {
            path: '/registration',
            name: 'Registration',
            component: RegisterVue
        },
        {
            path: '/calendarrent/:id',
            name: 'CalendarRent',
            component: CalenderRent
        },
        {
            path: '/admin',
            name: 'Admin',
            component: AdminPage
        }
    ],
});
export default router;