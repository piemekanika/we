import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

import './styles/index.scss';

import registerGlobalComponents from '~/components/register-global-components';

const app = registerGlobalComponents(createApp(App));

app
    .use(store)
    .use(router)
    .mount('#app');
