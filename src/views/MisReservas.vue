<template>
    <div class="flex justify-center w-full">
        <ul class="space-y-4">
            <div v-for="reserva in reservas" :key="reserva.id">
                <LiMisReservas :reserva="reserva"/>
            </div>
        </ul>
    </div>
</template>

<script>
 export default {
    data() {
      return {
        reservas:[{
        "id": "1",
        "cantidad_personas": "3",
        "nombre": "Yoga",
        "dia": "Viernes",
        "horario": "12:30",
        "localizacion": "Patio",
        "img": "https://res.cloudinary.com/proyectobalcon/image/upload/v1652636836/img/yoga_yr4byj.jpg"
        },
        {
        "id": "2",
        "cantidad_personas": "2",
        "nombre": "Sorrentinos de la casa",
        "dia": "Sabado",
        "horario": "Cena",
        "localizacion": "Restaurant",
        "img": "https://res.cloudinary.com/proyectobalcon/image/upload/v1652636836/img/sorrentinos_kdnwdy.jpg"
        }]
      }
    }
 }
</script>