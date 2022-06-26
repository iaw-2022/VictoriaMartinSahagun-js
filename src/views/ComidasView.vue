<template>
<div class="flex flex-col">
    <div v-for="comida in comidas" :key="comida.id">
            <CardComida :comida="comida"/>
    </div>
</div>
</template>

<script>
  const balconAPI = "https://proyecto-balcon-api.herokuapp.com/";
  export default {
    data() {
      this.getComidas();
      return{
        comidas:[]
      }
    },
    methods:{
      async getComidas(){
        const response = await fetch(`${balconAPI}comidas`);
        this.comidas = await response.json();
      }
    }
  }
</script>