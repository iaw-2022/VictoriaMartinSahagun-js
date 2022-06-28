<template>
<div class="grid grid-cols-1">
    <div v-for="comida in comidas" :key="comida.id">
            <CardComida class="mx-auto" :comida="comida"/>
    </div>
</div>
</template>

<script>
  import { useAuth0 } from '@auth0/auth0-vue';
  const balconAPI = "https://proyecto-balcon-api.herokuapp.com/";
  export default {
    setup() {
        const { isAuthenticated } = useAuth0();

        return {
          isAuthenticated
        };
      },
    data() {
      this.getComidas();
      return{
        comidas:[]
      }
    },
    methods:{
        async getComidas(){
          let response;
          if(this.isAuthenticated){
            response = await fetch(`${balconAPI}comidas/huesped/1`);
          }else{
            response = await fetch(`${balconAPI}comidas`);
          }
          this.actividades = await response.json();
        }
      }
  }
</script>