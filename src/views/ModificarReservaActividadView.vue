<template>
    <div class="flex align-middle justify-center w-full">
        <FormModificacionReservaActividad :actividad="actividad" :cabana="cabana"/>
    </div>
</template>

<script>
const balconAPI = "https://proyecto-balcon-api.herokuapp.com/";
let cabana;
let reserva;
let actividad;
 export default {
    data() {
      reserva=this.getReserva(this.$route.params.id).then(() => this.getActividad(this.reserva.actividad_id));
      cabana=this.getCabana();
      return {
        actividad,
        cabana
      }
    },
    methods:{
      async getCabana(){
        const response = await fetch(`${balconAPI}hospedados/1`);
        this.cabana = await response.json();
      },
      async getReserva(id){
        const response = await fetch(`${balconAPI}reservas_actividades/${id}`);
        this.reserva = await response.json();
      },
      async getActividad(id){
        const response = await fetch(`${balconAPI}actividades/${id}`);
        this.actividad = await response.json();
      }
    }
  }
</script>
