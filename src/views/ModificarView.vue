<template>
    <div class="flex align-middle justify-center w-full">
        <FormModificacion :reserva="reserva"/>
    </div>
</template>

<script>
 export default {
    data() {
      return {
        reserva:{
        "id": "1",
        "cantidad_personas": "3",
        "nombre": "Yoga",
        "dia": "Viernes",
        "horario": "12:30",
        "localizacion": "Patio"
        }
      }
    }
 }
</script>
