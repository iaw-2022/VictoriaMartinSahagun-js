<template>
<nav class="relative  w-full  flex flex-wrap  items-center  justify-between  py-4  bg-gray-900  text-gray-100 hover:text-gray-200 focus:text-gray-200  shadow-lg navbar navbar-expand-lg navbar-light">
  <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
  <button class="navbar-toggler  text-gray-100  border-0  hover:shadow-none hover:no-underline  py-2  px-2.5  bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" 
  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
      class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path fill="currentColor"
        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
      </path>
    </svg>
  </button>
  <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
    <a class="flex items-center text-gray-100 hover:text-gray-200 focus:text-gray-200 mt-2 lg:mt-0 mr-1" href="/">
      <img src="/logo-navegacion.png" style="height: 40px" alt="logo" loading="lazy" />
    </a>
    <!-- Left links -->
    <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
      <li class="nav-item p-2">
        <a class="nav-link text-gray-100 hover:text-gray-200 focus:text-gray-200 p-0" href="/">Inicio</a>
      </li>
      <li class="nav-item p-2">
        <a class="nav-link text-gray-100 hover:text-gray-200 focus:text-gray-200 p-0" href="/actividades">Actividades</a>
      </li>
      <li class="nav-item p-2">
        <a class="nav-link text-gray-100 hover:text-gray-200 focus:text-gray-200 p-0" href="/comidas">Comidas</a>
      </li>
    </ul>
  <!-- Left links -->
  </div>
  <!-- Collapsible wrapper -->

  <!-- Right elements -->
  <div class="flex items-center relative">
  <!-- Icon -->
    <div class="dropdown relative">
      <ul class="dropdown-menu        min-w-max        absolute        hidden        bg-gray-900        text-base        z-50
        float-left        py-2        list-none        text-left        rounded-lg        shadow-lg        mt-1 
        m-0        bg-clip-padding        border-none        left-auto        right-0" aria-labelledby="dropdownMenuButton1">
        <!--<li>
          <a class=" dropdown-item text-sm py-2  px-4  font-normal  block  w-full  whitespace-nowrap bg-transparent text-gray-100 hover:text-gray-200 focus:text-gray-200" href="/cuenta">Mi cuenta</a>
        </li>
        -->
        <li>
          <a class="dropdown-item text-sm py-2 px-4 font-normal  block w-full whitespace-nowrap bg-transparent text-gray-100 hover:text-gray-200 focus:text-gray-200" href="misreservas/actividades">Mis reservas</a>
        </li>
      </ul>
    </div>
    <div class="dropdown relative flex flex-row ">
      <a v-if="isAuthenticated" class="nav-item p-2 mr-6">
        <ButtonLogout />
      </a>
      <a v-else class="nav-item p-2">
        <ButtonLogin />
      </a>
      <a v-if="isAuthenticated" class="dropdown-toggle flex items-center hidden-arrow"  id="dropdownMenuButton2" role="button"
        data-bs-toggle="dropdown" aria-expanded="false">
        Usuario
      </a>
      <ul class="dropdown-menu    min-w-max    absolute    hidden    bg-gray-900    text-base    z-50    float-left    py-2    list-none    text-left    rounded-lg
      shadow-lg    mt-1    m-0    bg-clip-padding    border-none    left-auto   right-0" aria-labelledby="dropdownMenuButton2">
        <li>
          <a class=" dropdown-item text-sm py-2  px-4  font-normal  block  w-full  whitespace-nowrap bg-transparent text-gray-100 hover:text-gray-200 focus:text-gray-200" >Mi cuenta</a>
        </li>
        <li>
          <a class="dropdown-item text-sm py-2 px-4 font-normal  block w-full whitespace-nowrap bg-transparent text-gray-100 hover:text-gray-200 focus:text-gray-200" href="/misreservas/actividades">Reservas actividades</a>
          <a class="dropdown-item text-sm py-2 px-4 font-normal  block w-full whitespace-nowrap bg-transparent text-gray-100 hover:text-gray-200 focus:text-gray-200" href="/misreservas/comidas">Reservas comidas</a>
        </li>
      </ul>
    </div>
  </div>
  <!-- Right elements -->
  </div>
</nav>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';

  export default {
    setup() {
      const { isAuthenticated } = useAuth0();

      return {
        isAuthenticated
      };
    }
  };
</script>

