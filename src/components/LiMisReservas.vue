<template>
<div class="flex flex-row p-4 border bg-white rounded-lg items-center justify-evenly min-w-fit md:max-w-xl xl:max-w-2xl">
    <img :src="reserva.img" alt="reserva" class="w-20 h-20 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-lg"/>
    <div class="flex flex-col">
        <h3 class="font-bold text-gray-900 text-2xl text-center pb-4">{{reserva.nombre}}</h3>
        <div class="flex flex-row justify-between mt-1 space-x-6">
            <div class="font-medium text-gray-900">Dia: {{reserva.dia}}</div>
            <div class="font-medium text-gray-900">Horario: {{reserva.horario}}</div>
        </div>
        <div class="flex flex-row justify-between mt-1 space-x-6">
            <div class="font-medium text-gray-900">Personas: {{reserva.cantidad_personas}}</div>
            <div class="font-medium text-gray-900">Localizacion: {{reserva.localizacion}}</div>
        </div>
    </div>
    <div class="flex flex-col items-center">
        <RouterLink :to="`/modificar`">
            <button type="button" class="my-2 text-white font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 text-center">
                Modificar
            </button>
        </RouterLink>
        <RouterLink :to="`/misreservas`">
            <button type="button" class="my-2 text-white font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-5 py-2 text-center">
                Eliminar
            </button>
      </RouterLink>
    </div>
</div>
</template>

<script>
export default {
    props: ['reserva'],
}
</script>