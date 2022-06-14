<template>
  <div class="flex flex-col items-center justify-center h-screen sm:flex-row">
    <div class="p-4 sm:w-1/2 lg:w-1/3">
      <RouterLink :to="`/actividades/${propId}`">
          <div class="flex flex-col overflow-hidden transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl hover:scale-105">
              <div class="px-6 pt-4 mb-2 text-xl font-bold">
                  <span>Sábado</span>
              </div>
              <img class="h-56" alt="imagen"
                  src="\aquagym.png">
              <div class="px-6 pt-4 mb-2 text-l font-bold">
                  <span>Aqua Gym</span>
              </div>
              <div class="px-6 pt-2">
                  <div class="overflow-hidden h-auto ...">El aquagym es una actividad que aprovecha el entorno acuático para ejercitar los músculos, así como aumentar la resistencia y la fuerza del cuerpo, al ritmo de la música.</div>
              </div>
              <div class="flex flex-row justify-between pb-4">
                    <div class="px-6 pt-4 text-l">
                        <span class="font-bold">Localización</span>
                        <div class="overflow-hidden h-auto ...">Pileta interior</div>
                    </div>
                    <div class="px-6 pt-4 text-l">
                        <span class="font-bold">Horario</span>
                        <div class="overflow-hidden h-auto ...">16:00 hs</div>
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
    name: 'Card',
    cards: ['cardId'],
}
</script>
