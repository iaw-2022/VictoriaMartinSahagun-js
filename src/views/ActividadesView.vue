<template>
<div class="grid grid-cols-1">
    <div v-for="actividad in actividades" :key="actividad.id">
        <CardActividad class="mx-auto" :actividad="actividad"/>
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
        this.getActividades();
        return{
          actividades:[]
        }
      },
      methods:{
        async getActividades(){
          let response;
          if(this.isAuthenticated){
            response = await fetch(`${balconAPI}actividades/huesped/1`);
          }else{
            response = await fetch(`${balconAPI}actividades`);
          }
          this.actividades = await response.json();
        }
      }
    }
</script>
