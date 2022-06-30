<template>
  <div class="grid grid-cols-1 h-screen">
    <FormReservaActividad :elemento="elemento" :cabana="cabana"/>
  </div>
</template>

<script>
const balconAPI = "https://proyecto-balcon-api.herokuapp.com/";
let cabana;
let elemento;
let token;
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
      async getActividad(id){
        const response = await fetch(`${balconAPI}actividades/${id}`);
        this.elemento = await response.json();
      }
    }
 }
</script>