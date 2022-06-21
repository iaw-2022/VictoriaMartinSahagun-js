<template>
<div class="flex flex-col">
    <div v-for="cardComida in cardsComidas" :key="cardComida.id">
            <CardComida :cardComida="cardComida"/>
    </div>
</div>
</template>

<script>
import CardDescripcion from '../components/CardDescripcion.vue'
  export default {
  components: { CardDescripcion },
    data() {
      return {
        cardsComidas:[{
            "id": "1",
            "nombre": "Hamburguesa balcon",
            "descripcion": "Doble medallon de carne vacuna, panceta, cheddar y pan de papa. Acompañado de papas rústicas.",
            "dia": "Lunes",
            "tipo": "Cena",
            "img": "https://res.cloudinary.com/proyectobalcon/image/upload/v1652636836/img/hamburguesa_cntqos.jpg",
            "img_id": "img/hamburguesa_cntqos",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": "2",
            "nombre": "Sorrentinos de la casa",
            "descripcion": "Sorrentinos de zapallo calabaza acompañados de una salsa de roquefort y nueces.",
            "dia": "Sabado",
            "tipo": "Cena",
            "img": "https://res.cloudinary.com/proyectobalcon/image/upload/v1652636836/img/sorrentinos_kdnwdy.jpg",
            "img_id": "img/sorrentinos_kdnwdy",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": "3",
            "nombre": "Asado",
            "descripcion": "Porcion de carne a elección (vacío, entreña, costilla) acompañado de una ensalada con vegetales de la huerta.",
            "dia": "Domingo",
            "tipo": "Almuerzo",
            "img": "https://res.cloudinary.com/proyectobalcon/image/upload/v1655334005/img/asado_kyp0kp.webp",
            "img_id": "img/asado_g6ykz3",
            "created_at": null,
            "updated_at": null
        }]
      }
    }
  }
</script>