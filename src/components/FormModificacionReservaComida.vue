<template>
<div class="flex mt-10">
    <form class="bg-white rounded-lg w-auto h-auto">
            <div class="flex flex-col">
               <div class="flex py-5 pl-5 overflow-hidden">
                 <h1 class="inline text-2xl font-semibold leading-none">Modificar reserva</h1>
               </div>
               <div class="flex py-5 pl-5 overflow-hidden">
                 <p v-if="comida.tipo == 'cena'" class="inline leading-none">{{comida.nombre}} a las 20:30 el día {{comida.dia}}</p>
                 <p v-else class="inline leading-none">{{comida.nombre}} a las 13:30 el día {{comida.dia}}</p>
               </div>
            </div>
            <div class="px-5 pb-5">
               <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option v-for="index in cabana.capacidad" :key="index">{{index}}</option>
               </select>
               <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
               </div>
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
                     <span class="pl-2 mx-1" @click="putReservaComida()">Guardar</span>
                  </button>
                  </RouterLink>
               </div>
               <div class="flex-initial">
                  <RouterLink :to="`/misreservas/comidas`">
                  <button type="button" class="flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out">
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M8 9h8v10H8z" opacity=".3"></path>
                        <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>
                     </svg>
                     <span class="pl-2 mx-1" >Cancelar</span>
                  </button>
                  </RouterLink>
               </div>
            </div>
      </form>
</div> 
</template>

<style>
form {
    margin-top: 5%;
    margin-bottom: 15%;
    margin-left: 20%;
    margin-right: 5%;
    width: 100%;
    height: 100%;
}
</style>

<script>
const balconAPI = "https://proyecto-balcon-api.herokuapp.com/";
export default {
    props: ['comida','cabana'],
    methods: {
      async putReservaComida(){
         const index = document.getElementById("grid-state");
         const response = await fetch(`${balconAPI}reservas_comidas/${this.$route.params.id}`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
               'Access-Control-Allow-Origin': 'http://localhost:3000/',
               'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjJnZDB0VTEwNU9RNUpyMktiSDZjZyJ9.eyJpc3MiOiJodHRwczovL2Rldi1xbTh4ZjZtaS51cy5hdXRoMC5jb20vIiwic3ViIjoiOGdqTHUySVlENnk5b3ptYUtPYVMwQ1FxNk1GMTg1YzRAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjMwMDAiLCJpYXQiOjE2NTYyNTMxMjcsImV4cCI6MTY1ODg0NTEyNywiYXpwIjoiOGdqTHUySVlENnk5b3ptYUtPYVMwQ1FxNk1GMTg1YzQiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.ioVYKyR9AFx6c3YSVP6Pk0pJtUYn2nuIyR0hRa5vgbdQpjGsP6WDb0dsCu6Z_WsHnPw8xcB4wBExog9xIoy_8TtwocdRIG8GvpYkNSX4YTNM-WLfn5CmYT5yK2wTYMct16T_YpTXiiDhqTmxYqrM96WULk_1qfwQrzdYWLT6yG-7ZlzcaXLaNC6MWNZAcsGNbO3eRHVtWmpdJ7d5b_kzl-6veVRok8N_G3_wyBnKg4cRtzWtLhV74_oZB_GIPwbQWKFoAU8CrHNpgGz0uizyvnjxPHIOzArEkF8J2Ox_PptporY0yTfZfrytwD9nchGJ61tgsnPjv47-nhBCER3PCg'
            },
            body: JSON.stringify({cantidad_personas: index.value})
         });
         document.location.reload(true);
      }
    }
}
</script>