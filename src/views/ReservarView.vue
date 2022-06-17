<template>
  <div class="flex justify-center w-full">
    <FormReserva :elemento="elemento"/>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        elemento:{
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
      }
      }
    }
 }
</script>