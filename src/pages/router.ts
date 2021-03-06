/**
 * Create By Meng
 * Desc: 
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import App from '../App.vue';
import Account from './account/Account.vue';
// import Login from './account/Login.vue';
// import Register from './account/Register.vue';
import Home from './main/Home.vue';
import Market from './main/Market.vue';
// import News from './main/News.vue';
import Target from './main/Target.vue';
import KLine from './main/KLine.vue';
import High from './main/High.vue';
import Book from './high/Book.vue';
import Blog from './high/Blog.vue';
import Video from './high/Video.vue';
import Plaza from './high/Plaza.vue';
import About from './other/About.vue';
// import Notfound from './other/Notfound.vue';
// import Unknown from './other/Unknown.vue';



const highChild: Array<RouteRecordRaw> = [
  // { path: '/', redirect: '/home', component: App },
  { path: '/high/', redirect: '/high/book' },
  { path: '/high/book', name: 'Book', component: Book },
  { path: '/high/blog', name: 'Blog', component: Blog },
  { path: '/high/video', name: 'Video', component: Video },
  { path: '/high/plaza', name: 'Plaza', component: Plaza },
];

export const routers = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/home', component: App },
    { path: '/home', name: 'Home', component: Home },
    { path: '/market', name: 'Market', component: Market },
    // { path: '/news', name: 'News', component: News },
    { path: '/target', name: 'Target', component: Target },
    { path: '/kline', name: 'KLine', component: KLine },
    { path: '/high', name: 'High', component: High, children: highChild },
    { path: '/about', name: 'About', component: About },
    { path: '/account', name: 'Account', component: Account },
    // { path: '/login', name: 'Login', component: Login },
    // { path: '/register', name: 'Register', component: Register },
    // { path: '/unknown', name: 'Unknown', component: Unknown },
    // { path: '/*', component: Notfound },
  ]
});
