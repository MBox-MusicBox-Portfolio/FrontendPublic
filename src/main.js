import { createApp } from 'vue';
import { createPinia } from 'pinia';
import aos from 'aos';

import App from './app/App.vue';
import router from './router/index.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './assets/scss/main.scss';

const app = createApp(App);

app.use(aos.init());
app.use(createPinia());
app.use(router);

app.mount('#app');
