import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './index.css'
import App from './App.vue';
import router from './router';
import CardActividad from './components/CardActividad.vue'
import CarouselActividades from './components/CarouselActividades.vue'
import CardComida from './components/CardComida.vue'
import CarouselComidas from './components/CarouselComidas.vue'
import FormReserva from './components/FormReserva.vue'
import FormModificacion from './components/FormModificacion.vue'
import CardDescripcion from './components/CardDescripcion.vue'
import LiMisReservas from './components/LiMisReservas.vue'
import 'tw-elements';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('CardActividad', CardActividad);
app.component('CarouselActividades', CarouselActividades);
app.component('CardComida', CardComida);
app.component('CarouselComidas', CarouselComidas);
app.component('FormReserva', FormReserva);
app.component('FormModificacion', FormModificacion);
app.component('CardDescripcion', CardDescripcion);
app.component('LiMisReservas', LiMisReservas);

app.mount('#app');