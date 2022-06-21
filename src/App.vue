<template>
  <div class="flex flex-col h-full">
    <NavBar />
    <background>
      <div class=" bg-gray-900 bg-opacity-20 h-full">
        <RouterView />
      </div>
    </background>
    <Footer />
  </div>
</template>

<script>
  import Footer from './components/Footer.vue';
  import NavBar from './components/NavBar.vue';
  export default {
    name: 'App',
    components: {
      NavBar,
      Footer
    }
  }
</script>

<style>
background{
    background-image: url(https://res.cloudinary.com/proyectobalcon/image/upload/v1655838295/img/sierra3_hxco7e.jpg);
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
