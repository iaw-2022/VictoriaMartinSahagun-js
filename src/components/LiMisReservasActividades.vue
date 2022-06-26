<template>
<div class="flex flex-row p-4 border bg-white rounded-lg items-center justify-evenly min-w-fit md:max-w-xl xl:max-w-2xl">
    <img :src="reserva.img" alt="reserva" class="w-20 h-20 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-lg"/>
    <div class="flex flex-col">
        <h3 class="font-bold text-gray-900 text-2xl text-center pb-4" style="text-transform: capitalize">{{reserva.nombre}}</h3>
        <div class="flex flex-row justify-between mt-1 space-x-6">
            <div class="font-medium text-gray-900" style="text-transform: capitalize">Dia: {{reserva.dia}}</div>
            <div class="font-medium text-gray-900">Horario: {{reserva.horario}}</div>
        </div>
        <div class="flex flex-row justify-between mt-1 space-x-6">
            <div class="font-medium text-gray-900">Personas: {{reserva.cantidad_personas}}</div>
            <div class="font-medium text-gray-900" style="text-transform: capitalize">Localizacion: {{reserva.localizacion}}</div>
        </div>
    </div>
    <div class="flex flex-col items-center">
        <RouterLink :to="`/misreservas/actividades/modificar/${reserva.reserva_id}`">
            <button type="button" class="my-2 text-white font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 text-center">
                Modificar
            </button>
        </RouterLink>
        <button type="button" @click="deleteReserva()" class="my-2 text-white font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-5 py-2 text-center">
            Eliminar
        </button>
    </div>
</div>
</template>

<script>
const balconAPI = "https://proyecto-balcon-api.herokuapp.com/";
export default {
    props: ['reserva'],
    methods:{
        async deleteReserva(){
         const response = await fetch(`${balconAPI}reservas_actividades/${this.reserva.reserva_id}`, {
            method: 'DELETE',
            headers: {
               'Access-Control-Allow-Origin': 'http://localhost:3000/',
               'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjJnZDB0VTEwNU9RNUpyMktiSDZjZyJ9.eyJpc3MiOiJodHRwczovL2Rldi1xbTh4ZjZtaS51cy5hdXRoMC5jb20vIiwic3ViIjoiOGdqTHUySVlENnk5b3ptYUtPYVMwQ1FxNk1GMTg1YzRAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjMwMDAiLCJpYXQiOjE2NTYyNTMxMjcsImV4cCI6MTY1ODg0NTEyNywiYXpwIjoiOGdqTHUySVlENnk5b3ptYUtPYVMwQ1FxNk1GMTg1YzQiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.ioVYKyR9AFx6c3YSVP6Pk0pJtUYn2nuIyR0hRa5vgbdQpjGsP6WDb0dsCu6Z_WsHnPw8xcB4wBExog9xIoy_8TtwocdRIG8GvpYkNSX4YTNM-WLfn5CmYT5yK2wTYMct16T_YpTXiiDhqTmxYqrM96WULk_1qfwQrzdYWLT6yG-7ZlzcaXLaNC6MWNZAcsGNbO3eRHVtWmpdJ7d5b_kzl-6veVRok8N_G3_wyBnKg4cRtzWtLhV74_oZB_GIPwbQWKFoAU8CrHNpgGz0uizyvnjxPHIOzArEkF8J2Ox_PptporY0yTfZfrytwD9nchGJ61tgsnPjv47-nhBCER3PCg'
            },
        });
        document.location.reload(true);
        }
    }
}
</script>