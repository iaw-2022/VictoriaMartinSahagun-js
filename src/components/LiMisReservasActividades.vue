<template>
<div class="p-4 bg-white rounded-lg min-w-fit md:max-w-xl xl:max-w-2xl">
    <h3 class="font-bold text-gray-900 text-2xl text-center pb-4" style="text-transform: capitalize">{{reserva.nombre}}</h3>
    <div class="flex flex-row justify-evenly">
        <img :src="reserva.img" alt="reserva" class="w-20 h-20 my-auto md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-lg"/>
        <div class="flex flex-col mx-5">
            <div class="mt-2 font-medium text-gray-900" style="text-transform: capitalize">Dia: {{reserva.dia}}</div>
            <div class="mt-2 font-medium text-gray-900">Horario: {{reserva.horario}}</div>
            <div class="mt-2 font-medium text-gray-900">Personas: {{reserva.cantidad_personas}}</div>
            <div class="mt-2 font-medium text-gray-900" style="text-transform: capitalize">Localizacion: {{reserva.localizacion}}</div>
        </div>
        <div class="flex flex-col my-auto">
            <RouterLink :to="`/misreservas/actividades/modificar/${reserva.reserva_id}`">
                <button type="button" class="my-2 text-white font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 text-center">
                    Modificar
                </button>
            </RouterLink>
            <button type="button" data-modal-toggle="confirmarModal" data-bs-toggle="modal" data-bs-target="#confirmarModal" class="my-2 text-white font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-5 py-2 text-center">
                Eliminar
            </button>
        </div>
    </div>

<!-- Confirmar Modal -->
  <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="confirmarModal" tabindex="-1" aria-labelledby="confirmarModalLabel" aria-hidden="true">
        <div class="modal-dialog relative w-auto pointer-events-none ">
            <div class="modal-content border-2 border-gray-700 shadow-lg relative flex flex-col w-full pointer-events-auto font-bold  bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 bg-clip-padding rounded-md outline-none text-current">
                <h6 class="text-xl font-medium leading-normal text-white text-center px-5 py-5" id="confirmarModalLabel">
                    Estas a punto de eliminar esta reserva
                </h6>
                <div class="modal-footer flex flex-row m-5 justify-evenly rounded-b-md">
                    <button type="button"  data-bs-dismiss="modal" class="flex items-center px-5 py-2.5 font-medium tracking-wide text-black bg-white capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out">
                        <span class="pl-2 mx-1" >Cancelar</span>
                    </button>
                    <button type="button" @click="deleteReserva()" class="flex items-center px-5 py-2.5 font-medium tracking-wide text-black bg-white capitalize rounded-md  hover:bg-green-200 hover:fill-current hover:text-green-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out">
                        <span class="pl-2 mx-1" >Aceptar</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
const balconAPI = "https://proyecto-balcon-api.herokuapp.com/";
export default {
    props: ['reserva'],
    methods:{
        async deleteReserva(){
            this.token = await this.$auth0.getAccessTokenSilently();
            const response = await fetch(`${balconAPI}reservas_actividades/${this.reserva.reserva_id}`, {
                method: 'DELETE',
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:3000/',
                    'Authorization': `Bearer ${this.token}`
                },
            });
            document.location.reload(true);
        }
    }
}
</script>