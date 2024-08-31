<template>
  <div class="p-dialog p-component" style="display: block;">
    <div class="p-dialog-header">
      <h3 class="title-movie">{{ props.movie.title }}</h3>
    </div>
    <div class="p-dialog-content">
      <img :src="'https://image.tmdb.org/t/p/w500' + props.movie.poster_path" :alt="props.movie.title">
      <p>{{ props.movie.overview }}</p>
      <p><strong>Fecha de lanzamiento:</strong> {{ props.movie.release_date }}</p>
      <p><strong>Calificación:</strong> {{ props.movie.vote_average }}</p>
      <p><strong>Presupuesto:</strong> ${{ props.movie.budget.toLocaleString() }}</p>
      <p><strong>Recaudación:</strong> ${{ props.movie.revenue.toLocaleString() }}</p>
      <p><strong>Géneros:</strong> {{ props.movie.genres.map(genre => genre.name).join(', ') }}</p>
      <p><strong>Idioma Original:</strong> {{ props.movie.original_language }}</p>
      <p><strong>Duración:</strong> {{ props.movie.runtime }} minutos</p>
      <p><strong>Status:</strong> {{ props.movie.status }}</p>
      <p><strong>Tagline:</strong> {{ props.movie.tagline }}</p>
      <p><strong>Popularidad:</strong> {{ props.movie.popularity }}</p>
      <a :href="props.movie.homepage" target="_blank">Sitio Web</a>
    </div>
  </div>
</template>

<style scoped>

body {
  font-family: "sans-serif";
}

  .title-movie {
    font-size: xx-large;
  }
  .p-dialog {
  
  }
  .p-dialog-header {
    
  }
  .p-dialog-content {
    
  }
  .p-dialog-header-close {
    
  }
</style>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'
  import type { IMovieDetail } from '~/interfaces/IMovieDetail'

  const props = defineProps<{
    movie: IMovieDetail;
  }>()

  // eemitir evento de cierre
  const emit = defineEmits(['close'])
</script>
