<template>
    <div class="flex justify-center w-full">
        <ul class="space-y-4 mt-5 w-1/2 justify-center mb-5">
            <li v-for="reserva in reservas" :key="reserva.id">
                <LiMisReservasComidas :reserva="reserva"/>
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