<template>
  <div class="flex align-middle justify-center w-full">
    <FormReservaComida :elemento="elemento" :cabana="cabana"/>
  </div>
</template>

<script>
const balconAPI = "https://proyecto-balcon-api.herokuapp.com/";
let cabana;
let elemento;
 export default {
    data() {
      elemento=this.getComida(this.$route.params.id);
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
      async getComida(id){
        const response = await fetch(`${balconAPI}comidas/${id}`);
        this.elemento = await response.json();
      }
    }
 }
</script>