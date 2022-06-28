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
  let token;

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
            this.token = await this.$auth0.getAccessTokenSilently();
            response = await fetch(`${balconAPI}actividades/huesped/`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
              }
            });
          }else{
            response = await fetch(`${balconAPI}actividades`);
          }
          this.actividades = await response.json();
        }
      }
    }
</script>
