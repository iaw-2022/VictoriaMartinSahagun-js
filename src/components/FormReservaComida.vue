<template>
<div class="bg-white rounded-lg mx-auto my-auto">
            <div class="flex flex-col">
               <div class="py-5 pl-5 overflow-hidden">
                 <h1 class="inline text-2xl font-semibold leading-none">Reserva</h1>
               </div>
               <div class="py-5 px-5">
                 <p v-if="elemento.tipo == 'cena'" class="text-center">{{elemento.nombre}} a las 20:30 el día {{elemento.dia}}</p>
                 <p v-else class="text-center">{{elemento.nombre}} a las 13:30 el día {{elemento.dia}}</p>
               </div>
            </div>
            <div class="px-5 pb-5">
               <a class="text-gray-600">Cantidad de personas:</a>
               <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-600 placeholder-gray-600 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option v-for="index in cabana.capacidad" :key="index">{{index}}</option>
               </select>
            </div>
            <div class="flex flex-row-reverse p-3">
               <div class="flex-initial pl-3">
                  <RouterLink :to="`/misreservas/comidas`">
                  <button type="button" class="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z" opacity=".3"></path>
                        <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                     </svg>
                     <span class="pl-2 mx-1" @click="postReservaComida()" >Guardar</span>
                  </button>
                  </RouterLink>
               </div>
               <div class="flex-initial" >
                  <RouterLink :to="`/comidas`">
                  <button type="button" class="flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out">
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M8 9h8v10H8z" opacity=".3"></path>
                        <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>
                     </svg>
                     <span class="pl-2 mx-1">Cancelar</span>
                  </button>
                  </RouterLink>
               </div>
            </div>
</div>
</template>

<script>
const balconAPI = "https://proyecto-balcon-api.herokuapp.com/";
  export default {
    props: ['cabana','elemento'],
     methods: {
      async postReservaComida(){
         this.token = await this.$auth0.getAccessTokenSilently();
         const index = document.getElementById("grid-state");
         const response = await fetch(`${balconAPI}reservas_comidas/`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               'Access-Control-Allow-Origin': 'http://localhost:3000/',
               'Authorization': `Bearer ${this.token}`
            },
            body: JSON.stringify({cabana_id: this.cabana.id, comida_id: this.elemento.id,cantidad_personas: index.value})
         });
         document.location.reload(true);
      }
    }
  }
</script>