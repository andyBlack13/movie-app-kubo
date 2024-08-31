<template>
  <!-- skeleon loaders-->
  <CardMovie v-if="movies.length === 0" />


  <div v-else class="grid-container">
    <Card v-for="movie in movies" :key="movie.id" class="card-item">
      <template #header>
        <img :src="movie.poster_path ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path : '/img/movie.jpg'" 
          :alt="movie.title"
          class="card-image"
        />
      </template>
      <template #title>{{ movie.title }}</template>
      <template #subtitle>Fecha de lanzamiento: {{ movie.release_date }}</template>
      <!--<template #content>
        <p class="card-description">{{ movie.overview }}</p>
      </template>-->
      <template #footer>
        <div class="card-footer">
          <!--<button @click="showMovieDetail(movie.id)" severity="secondary" text raised class="button-detail p-button-secondary p-component">Ver Detalles</button>-->
          <nuxt-link :to="`/movie-detail/${movie.id}`" class="button-detail">
            Ver Detalles
          </nuxt-link>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }

  .card-item {
    display: flex;
    flex-direction: column;
  }

  .card-image {
    width: 100%;
    height: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .card-description {
    margin: 0;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
  }

  .button-detail {
    width: 100%;
    height: 35px;
    border-radius: 10px;
  }
</style>

<script setup lang="ts">
  import { ref } from 'vue'
  import CardMovie from './skeleton-loaders/card-movie.vue';

  interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    overview: string;
    vote_average: number;
  }
  // recibir las peliculas desde el componente padre
  const props = defineProps<{
    movies: Movie[]
  }>()

  const router = useRouter()

  const showMovieDetail = (id: number) => {
    console.log(id);
    router.push({ path: `/movie-detail/${id}` });

    //window.location.href = `/movie-detail/${id}`;
  }
</script>