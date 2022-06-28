import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './index.css'
import App from './App.vue';
import router from './router';
import CardActividad from './components/CardActividad.vue'
import CardComida from './components/CardComida.vue'

import FormReservaActividad from './components/FormReservaActividad.vue'
import FormReservaComida from './components/FormReservaComida.vue'

import FormModificacionReservaActividad from './components/FormModificacionReservaActividad.vue'
import FormModificacionReservaComida from './components/FormModificacionReservaComida.vue'

import CardDescripcion from './components/CardDescripcion.vue'

import LiMisReservasActividades from './components/LiMisReservasActividades.vue'
import LiMisReservasComidas from './components/LiMisReservasComidas.vue'

import ButtonLogin from './components/ButtonLogin.vue'
import ButtonLogout from './components/ButtonLogout.vue'
import UserInformation from './components/UserInformation.vue'
import 'tw-elements';
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

app.use(
  createAuth0({
    domain: 'dev-qm8xf6mi.us.auth0.com',
    client_id: 'JncpiY8ZD3AD6FNTNIA3u77v98map6Lo',
    redirect_uri: window.location.origin,
    audience: 'https://localhost:3000',
  })
);

app.use(createPinia());
app.use(router);
app.component('CardActividad', CardActividad);
app.component('CardComida', CardComida);

app.component('FormReservaActividad', FormReservaActividad);
app.component('FormReservaComida', FormReservaComida);

app.component('FormModificacionReservaActividad', FormModificacionReservaActividad);
app.component('FormModificacionReservaComida', FormModificacionReservaComida);

app.component('CardDescripcion', CardDescripcion);

app.component('LiMisReservasActividades', LiMisReservasActividades);
app.component('LiMisReservasComidas', LiMisReservasComidas);

app.component('ButtonLogin', ButtonLogin);
app.component('ButtonLogout', ButtonLogout);
app.component('UserInformation', UserInformation);

app.mount('#app');