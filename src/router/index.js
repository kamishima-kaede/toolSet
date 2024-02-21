import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import(/* webpackChunkName: "Home" */ '@/views/Home/HomeIndex');
// 油价查询
const GasOline = () => import(/* webpackChunkName: "GasOline" */ '@/views/GasOline/GasOlineIndex');
// 日历
const Calendar = () => import(/* webpackChunkName: "Calendar" */ '@/views/Calendar/CalendarIndex');
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '@/views/NotFound/NotFoundIndex');

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: Home },
  { path: '/gasoline', name: 'gasoline', component: GasOline },
  { path: '/calendar', name: 'calendar', component: Calendar },
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
