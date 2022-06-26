<template>
<div class="flex flex-col">
    <div v-for="actividad in actividades" :key="actividad.id">
        <CardActividad :actividad="actividad"/>
    </div>
</div>
</template>

<script>
const balconAPI = "https://proyecto-balcon-api.herokuapp.com/";
  export default {
    data() {
      this.getActividades();
      return{
        actividades:[]
      }
    },
    methods:{
      async getActividades(){
        const response = await fetch(`${balconAPI}actividades`);
        this.actividades = await response.json();
      }
    }
  }
</script>
