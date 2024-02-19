import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import(/* webpackChunkName: "Home" */ '@/views/Home/HomeIndex');
const OilPrice = () => import(/* webpackChunkName: "OilPrice" */ '@/views/OilPrice/OilPriceIndex');
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '@/views/NotFound/NotFoundIndex');

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: Home },
  { path: '/oilPrice', name: 'oilPrice', component: OilPrice },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0, behavior: 'smooth' };
  },
});

export default router;
