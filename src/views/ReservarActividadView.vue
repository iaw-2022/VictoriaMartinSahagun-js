<template>
  <div class="grid grid-cols-1 h-screen">
    <FormReservaActividad :elemento="elemento" :cabana="cabana"/>
  </div>
</template>

<script>
const balconAPI = "https://proyecto-balcon-api.herokuapp.com/";
let cabana;
let elemento;
 export default {
    data() {
      elemento=this.getActividad(this.$route.params.id);
      cabana=this.getCabana();
      return {
        elemento,
        cabana
      }
    },
    methods:{
      async getCabana(){
        const response = await fetch(`${balconAPI}hospedados/1`);
        this.cabana = await response.json();
      },
      async getActividad(id){
        const response = await fetch(`${balconAPI}actividades/${id}`);
        this.elemento = await response.json();
      }
    }
 }
</script>