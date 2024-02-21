import 'normalize.css/normalize.css';
import 'amfe-flexible';
import '@/fonts/iconfont.css';
import 'vant/lib/index.css';
import Vant from 'vant';
import { Lazyload } from 'vant';
import { createApp } from 'vue';
import router from '@/router';

import App from './App.vue';

const app = createApp(App);
app.use(Vant);
app.use(Lazyload, {
  lazyComponent: true,
});
app.use(router);

app.mount('#app');
