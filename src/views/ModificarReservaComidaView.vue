<template>
    <div class="flex align-middle justify-center w-full">
        <FormModificacionReservaComida :comida="comida" :cabana="cabana"/>
    </div>
</template>

<script>
const balconAPI = "https://proyecto-balcon-api.herokuapp.com/";
let cabana;
let reserva;
let comida;
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
        const response = await fetch(`${balconAPI}hospedados/1`);
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
