<script setup lang="ts">
import FooterWeb from './components/footer-web.vue';
import NavBar from './components/nav-bar.vue';
</script>

<template>
  <div>
    <header>
      <NavBar/>
    </header>

    <main>
      <!-- renderiza el contenido de index.vue-->
      <NuxtPage />
    </main>

    <footer>
      <FooterWeb/>
    </footer>
  </div>
</template>

<style scoped>

  body {
    font-family: sans-serif;
  }

  main {
    padding: 20px;
  }

</style>