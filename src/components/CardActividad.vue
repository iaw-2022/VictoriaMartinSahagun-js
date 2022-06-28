<template>
    <div class="p-4 sm:w-1/2 lg:w-1/3">
          <div class="flex flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105">
              <div class="px-6 pt-4 mb-2 text-xl font-bold">
                  <span>{{actividad.dia}}</span>
              </div>
              <img class="h-56" alt="imagen"
                  :src="actividad.img">
              <div class="px-6 pt-4 mb-2 text-l font-bold">
                  <span>{{actividad.nombre}}</span>
              </div>
              <div class="px-6 pt-2">
                  <div class="overflow-hidden h-auto ...">{{actividad.descripcion}}</div>
              </div>
              <div class="flex flex-row justify-evenly pb-4">
                    <div class="pt-4 text-l">
                        <span class="font-bold">Localización</span>
                        <div class="overflow-hidden h-auto ..." style="text-transform: capitalize">{{actividad.localizacion}}</div>
                    </div>
                    <div class="pt-4 text-l">
                        <span class="font-bold">Horario</span>
                        <div class="overflow-hidden h-auto ...">{{actividad.horario}}</div>
                    </div>
                    <div v-if="isAuthenticated" class="pt-4 text-l">
                        <RouterLink :to="`/actividades/reservar/${actividad.id}`" type="button" class="text-white font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-900 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            Reservar
                        </RouterLink>
                    </div>
              </div>
          </div>
    </div>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';

  export default {
    props: ['actividad'],
    setup() {
      const { isAuthenticated } = useAuth0();

      return {
        isAuthenticated
      };
    }
  };
</script>

<style>
span{
    text-transform: capitalize
}
</style>
