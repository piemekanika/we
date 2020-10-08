import { createRouter, createWebHistory } from 'vue-router';

import Vue from 'vue';

import Home from '../views/Home.vue';
import Login from '~/pages/login.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            layout: 'outer-form',
            title: 'Log in into your account',
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
