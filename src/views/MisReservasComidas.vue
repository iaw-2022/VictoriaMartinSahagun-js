<template>
    <div v-if="reservas.length>0" class="grid grid-cols-1 h-screen">
      <ul class="mx-auto my-auto">
        <li v-for="reserva in reservas" :key="reserva.id">
            <LiMisReservasComidas class="my-4" :reserva="reserva"/>
        </li> 
      </ul>
    </div>
    <div v-else class="grid grid-cols-1 h-screen">
      <div class="mx-auto my-auto p-10 rounded-lg bg-white text-xl font-medium">
        <h4>No tiene reservas para ninguna actividad.</h4>        
      </div>      
    </div>
</template>

<script>
const balconAPI = "https://proyecto-balcon-api.herokuapp.com/";
let token;
 export default {
    data() {
      this.getReservas();
      return {
        reservas: []
      }
    },
    methods:{
      async getReservas(){
        this.token = await this.$auth0.getAccessTokenSilently();
        const response = await fetch(`${balconAPI}reservas_comidas`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
          }
        });
        this.reservas = await response.json();
      }
    }
  }
</script>