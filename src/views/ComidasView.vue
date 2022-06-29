<template>
<div class="grid grid-cols-1">
    <div v-for="comida in comidas" :key="comida.id">
            <CardComida class="mx-auto" :comida="comida" :hospedad="hospedado"/>
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
      this.getComidas();
      return{
        comidas:[],
        hospedado: Boolean
      }
    },
    methods:{
      async getComidas(){
        let response;
        if(this.isAuthenticated){
          this.token = await this.$auth0.getAccessTokenSilently();
          response = await fetch(`${balconAPI}comidas/huesped/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.token}`
            }
          });
          this.hospedado=true;
          if (response.status === 400){
            response = await fetch(`${balconAPI}comidas`);
            this.hospedado=false;
          }
        }else{
          response = await fetch(`${balconAPI}comidas`);
        };
        this.comidas = await response.json();
        this.hospedado=false;
      }
    }
  }
</script>