import './bootstrap';

import {createApp} from 'vue/dist/vue.esm-bundler.js';
import Example1 from './components/Example1.vue';

const app = createApp({});

app.component('Example1', Example1);

app.mount("#app");
