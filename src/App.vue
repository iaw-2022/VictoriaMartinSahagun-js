<template>
  <div class="flex flex-col h-screen">
    <NavBar />
    <background>
      <RouterView />
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
    background-image: url(sierra3.jpg);
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
