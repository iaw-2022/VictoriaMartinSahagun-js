<template>
<div class="grid grid-cols-1">
    <div v-for="actividad in actividades" :key="actividad.id">
        <CardActividad class="mx-auto" :actividad="actividad" :hospedado="hospedado"/>
    </div>
</div>
</template>

<script>
  import { useAuth0 } from '@auth0/auth0-vue';
  const balconAPI = "https://proyecto-balcon-api.herokuapp.com/";
  let token;
  let hospedado;
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
          this.hospedado='true';
          if(this.isAuthenticated){
            this.token = await this.$auth0.getAccessTokenSilently();
            response = await fetch(`${balconAPI}actividades/huesped/`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
              }
            });
          if (response.status === 400){
            this.hospedado='false';
            response = await fetch(`${balconAPI}actividades`);
          }
          }else{
            this.hospedado='false';
            response = await fetch(`${balconAPI}actividades`);
          }
          this.actividades = await response.json();
        }
      }
    }
</script>
