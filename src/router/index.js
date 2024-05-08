import { createRouter, createWebHashHistory } from 'vue-router';

const Home = () => import(/* webpackChunkName: "Home" */ '@/views/Home/HomeIndex');
// 油价查询
const GasOline = () => import(/* webpackChunkName: "GasOline" */ '@/views/GasOline/GasOlineIndex');
// 日历
const Calendar = () => import(/* webpackChunkName: "Calendar" */ '@/views/Calendar/CalendarIndex');
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '@/views/NotFound/NotFoundIndex');

export const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: Home },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar,
    meta: {
      name: '日历',
      icon: 'calendar',
    },
  },
  {
    path: '/gasoline',
    name: 'gasoline',
    component: GasOline,
    meta: {
      name: '油价查询',
      icon: 'gasoline',
    },
  },
  { path: '/404', name: 'NotFound', component: NotFound },
  { path: '/:pathMatch(.*)*', redirect: '/404' },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0, behavior: 'smooth' };
  },
});

export default router;
