<template>
<div :id="`${id}`" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      :data-bs-target="`#${id}`"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      :data-bs-target="`#${id}`"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      :data-bs-target="`#${id}`"
      data-bs-slide-to="3"
      aria-label="Slide 2"
    ></button>
  </div>
  <div class="carousel-inner relative w-full h-full overflow-hidden">
    <div v-for="cardComida in cardsComidas" :key="cardComida.id">
      <div v-if="cardComida.id == 1" class="carousel-item active float-left w-full">
        <CardComida :cardComida="cardComida"/>
      </div>
      <div v-else class="carousel-item float-left w-full">
        <CardComida :cardComida="cardComida"/>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    :data-bs-target="`#${id}`"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Anterior</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    :data-bs-target="`#${id}`"
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