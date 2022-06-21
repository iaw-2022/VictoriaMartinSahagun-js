<template>
<div class="flex flex-col">
    <div v-for="cardActividad in cardsActividades" :key="cardActividad.id">
            <CardActividad :cardActividad="cardActividad"/>
    </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        cardsActividades:[{
        "id": "1",
        "nombre": "Yoga",
        "dia": "Viernes",
        "descripcion": "El yoga es una práctica que conecta el cuerpo, la respiración y la mente. Esta práctica utiliza posturas físicas, ejercicios de respiración y meditación para mejorar la salud general.",
        "horario": "12:30",
        "localizacion": "Patio",
        "img": "https://res.cloudinary.com/proyectobalcon/image/upload/v1652636836/img/yoga_yr4byj.jpg",
        "img_id": "img/aqua_gym_zyvz6s",
        "created_at": null,
        "updated_at": "2022-06-14T17:35:48.000Z"
      },
      {
        "id": "2",
        "nombre": "Cata de vinos",
        "dia": "Sabado",
        "descripcion": "Vas a aprender la diferencia entre catar y degustar distintos tipos de vinos y además te explicaremos todos los sentidos que intervienen en la memoria sensorial.",
        "horario": "19:30",
        "localizacion": "Restaurant",
        "img": "https://res.cloudinary.com/proyectobalcon/image/upload/v1655228172/img/zmhskl1k11paadbg8wl2.jpg",
        "img_id": "img/zmhskl1k11paadbg8wl2",
        "created_at": null,
        "updated_at": "2022-06-14T17:36:12.000Z"
      },
      {
        "id": "3",
        "nombre": "Aqua gym",
        "dia": "Domingo",
        "descripcion": "El aquagym es una actividad que aprovecha el entorno acuático para ejercitar los músculos, así como aumentar la resistencia y la fuerza del cuerpo, al ritmo de la música.",
        "horario": "16:00",
        "localizacion": "Pileta exterior",
        "img": "https://res.cloudinary.com/proyectobalcon/image/upload/v1655320387/img/aquagym_lxqqiq.png",
        "img_id": "img/aqua_gym_zyvz6s",
        "created_at": null,
        "updated_at": null
      }]
      }
    }
  }
</script>
