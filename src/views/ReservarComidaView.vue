<template>
  <div class="grid grid-cols-1 h-screen">
    <FormReservaComida :elemento="elemento" :cabana="cabana"/>
  </div>
</template>

<script>
const balconAPI = "https://proyecto-balcon-api.herokuapp.com/";
let cabana;
let elemento;
let token;
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
      async getComida(id){
        const response = await fetch(`${balconAPI}comidas/${id}`);
        this.elemento = await response.json();
      }
    }
 }
</script>