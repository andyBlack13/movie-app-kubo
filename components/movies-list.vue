<template>
  <!-- mensaje de error -->
  <div v-if="errorMessage" class="error-message">
    <p>{{ errorMessage }}</p>
  </div>

  <!-- skeleon loaders-->
  <CardMovie v-if="isLoading" />

  <!-- success listado de peliculas-->
  <div v-else-if="!errorMessage && movies.length > 0" class="grid-container">
    <Card v-for="movie in movies" :key="movie.id" class="card-item">
      <template #header>
        <img :src="movie.poster_path ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path : '/img/movie.jpg'" 
          :alt="movie.title"
          class="card-image"
        />
      </template>
      <template #title>{{ movie.title }}</template>
      <template #subtitle>Fecha de lanzamiento: {{ movie.release_date }}</template>
      <template #footer>
        <div class="card-footer">
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
    font-family: 'Roboto';
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
    background: #121212;
    border: 1px solid #3f3f46;
    text-decoration: none;
    font-family: 'Roboto';
    justify-items: center;
    display: grid;
    align-content: center;
    color: #9e9ea7;
  }

  .error-message {
    margin-top: 3em;
    margin-bottom: 3em;
    color: #999999;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: xx-large;
    text-align: center;
    font-family: 'Roboto';
  }
</style>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import CardMovie from './skeleton-loaders/card-movie.vue'

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
    error: string | null
    isLoading: boolean
  }>()

  const router = useRouter()

  const showMovieDetail = (id: number) => {
    console.log(id);
    router.push({ path: `/movie-detail/${id}` });

    //window.location.href = `/movie-detail/${id}`;
  }

  const errorMessage = ref(props.error)
  const isLoading = ref(props.isLoading)
  const movies = ref(props.movies)

  watch(() => props.error, (newError) => {
    errorMessage.value = newError
  })

  watch(() => props.isLoading, (newLoading) => {
    isLoading.value = newLoading
  })

  watch(() => props.movies, (newMovies) => {
    movies.value = newMovies
  })
</script>
