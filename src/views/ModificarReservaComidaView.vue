<template>
    <div class="grid grid-cols-1 h-screen">
        <FormModificacionReservaComida class="mx-auto my-auto" :comida="comida" :cabana="cabana"/>
    </div>
</template>

<script>
const balconAPI = "https://proyecto-balcon-api.herokuapp.com/";
let cabana;
let reserva;
let comida;
let token;
 export default {
    data() {
      reserva=this.getReserva(this.$route.params.id).then(() => this.getComida(this.reserva.comida_id));
      cabana=this.getCabana();
      return {
        comida,
        cabana
      }
    },
    methods:{
      async getCabana(){
        this.token = await this.$auth0.getAccessTokenSilently();
        const response = await fetch(`${balconAPI}hospedados/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
          }
        });
        this.cabana = await response.json();
      },
      async getReserva(id){
        const response = await fetch(`${balconAPI}reservas_comidas/${id}`);
        this.reserva = await response.json();
      },
      async getComida(id){
        const response = await fetch(`${balconAPI}comidas/${id}`);
        this.comida = await response.json();
      }
    }
  }
</script>
