<template>
    <li>
        <a class="flex flex-row justify-evenly p-4 border bg-white rounded-lg items-center ">
            <img :src="reserva.img" alt="reserva" class="w-20 h-20 rounded-lg"/>
            <div class="justify-evenly">
                <h3 class="font-bold text-gray-900">{{reserva.nombre}}</h3>
                <div class="flex flex-row mt-1">
                    <div class="text-s font-medium text-gray-900">Dia: {{reserva.dia}}</div>
                    <div class="text-s font-medium text-gray-900">Horario: {{reserva.horario}}</div>
                </div>
                <div class="flex flex-row mt-1 ">
                    <div class="text-s font-medium text-gray-900">Personas: {{reserva.cantidad_personas}}</div>
                    <div class="text-s font-medium text-gray-900">Localizacion: {{reserva.localizacion}}</div>
                </div>
            </div>
            <div class="flex flex-col">
                <RouterLink :to="`/modificar`">
                    <button type="button" class="text-white font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-900 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Modificar
                    </button>
                </RouterLink>
                <RouterLink :to="`/misreservas`">
                    <button type="button" class="text-white font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-900 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Eliminar
                    </button>
                </RouterLink>
            </div>
        </a>
    </li>
</template>

<script>
export default {
    props: ['reserva'],
}
</script>