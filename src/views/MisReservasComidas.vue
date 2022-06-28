<template>
    <div class="grid grid-cols-1 h-screen">
        <ul class="mx-auto my-auto">
            <li v-for="reserva in reservas" :key="reserva.id">
                <LiMisReservasComidas class="my-4" :reserva="reserva"/>
            </li> 
        </ul>
    </div>
</template>

<script>
const balconAPI = "https://proyecto-balcon-api.herokuapp.com/";
 export default {
    data() {
      this.getReservas();
      return {
        reservas: []
      }
    },
    methods:{
      async getReservas(){
        const response = await fetch(`${balconAPI}reservas_comidas/huesped/1`);
        this.reservas = await response.json();
      }
    }
  }
</script>