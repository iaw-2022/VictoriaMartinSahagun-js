<template>
  <div class="flex flex-col items-center justify-center h-full sm:flex-row">
    <div class="p-4 sm:w-1/2 lg:w-1/3">
      <RouterLink :to="`/reservar/${cardComida.id}`">
          <div class="flex flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105">
              <div class="px-6 pt-4 mb-2 text-xl font-bold">
                  <span>{{cardComida.dia}}</span>
              </div>
              <img class="h-56" alt="imagen"
                  :src="cardComida.img">
              <div class="px-6 pt-4 mb-2 text-l font-bold">
                  <span>{{cardComida.nombre}}</span>
              </div>
              <div class="px-6 pt-2">
                  <div class="overflow-hidden h-auto ...">{{cardComida.descripcion}}</div>
              </div>
              <div class="flex flex-row justify-between pb-4">
                <div class="px-6 pt-4 text-l">
                        <span class="font-bold">Localización</span>
                        <div class="overflow-hidden h-auto ...">Restaurant</div>
                    </div>
                   <div class="px-6 pt-4 text-l">
                        <span class="font-bold">{{cardComida.tipo}}</span>
                        <div v-if="cardComida.tipo == 'Cena'" class="overflow-hidden h-auto ...">20:30</div>
                        <div v-else class="overflow-hidden h-auto ...">12:30</div>
                    </div>
                    <div class="px-6 pt-4 text-l">
                        <button type="button" class="text-white font-bold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-900 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            Reservar
                        </button>
                    </div>
              </div>
          </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
    props: ['cardComida'],
}
</script>