import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './index.css'
import App from './App.vue';
import router from './router';
import Card from './components/Card.vue'
import 'tw-elements';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('Card', Card);

app.mount('#app');