/**
 * Create By Meng
 * Desc: 
 */
import { createRouter, createWebHashHistory } from 'vue-router';

import App from '../App.vue';
import Account from './account/Account.vue';
import Login from './account/Login.vue';
import Register from './account/Register.vue';
import Home from './main/Home.vue';
import Market from './main/Market.vue';
import News from './main/News.vue';
import Target from './main/Target.vue';
import About from './other/About.vue';
import Notfound from './other/Notfound.vue';
import Unknown from './other/Unknown.vue';

export const routers = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/home', component: App },
    { path: '/home', name: 'Home', component: Home },
    { path: '/market', name: 'Market', component: Market },
    { path: '/news', name: 'News', component: News },
    { path: '/target', name: 'Target', component: Target },
    { path: '/about', name: 'About', component: About },
    { path: '/account', name: 'Account', component: Account },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/unknown', name: 'Unknown', component: Unknown },
    { path: '/*', component: Notfound },
  ]
});
