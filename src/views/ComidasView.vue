<template>
<div class="grid grid-cols-1">
    <div v-for="comida in comidas" :key="comida.id">
            <CardComida class="mx-auto" :comida="comida" :hospedado="hospedado"/>
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
      this.getComidas();
      return{
        comidas:[]
      }
    },
    methods:{
      async getComidas(){
        let response;
        this.hospedado='true';
        if(this.isAuthenticated){
          this.token = await this.$auth0.getAccessTokenSilently();
          response = await fetch(`${balconAPI}comidas/huesped/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.token}`
            }
          });
          if (response.status === 400){
            this.hospedado='false';
            response = await fetch(`${balconAPI}comidas`);
          }
        }else{
          this.hospedado='false';
          response = await fetch(`${balconAPI}comidas`);
        };
        this.comidas = await response.json();
      }
    }
  }
</script>