<template>
<div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="3"
      aria-label="Slide 2"
    ></button>
  </div>
  <div class="carousel-inner relative w-auto h-auto overflow-hidden">
    <div v-for="cardActividad in cardsActividades" :key="cardActividad.id">
      <div v-if="cardActividad.id == 1" class="carousel-item active float-left w-auto">
        <CardActividad :cardActividad="cardActividad"/>
      </div>
      <div v-else class="carousel-item float-left w-auto">
        <CardActividad :cardActividad="cardActividad"/>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Anterior</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Siguente</span>
  </button>
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