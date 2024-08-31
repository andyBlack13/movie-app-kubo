<template>
  <form @submit.prevent="searchMovies">
    <div class="flex card">
      <div class="c-flex flex-col gap-2">
        <InputText class="input" id="search" v-model="value" placeholder="Buscar película..." />
        <Button type="submit" severity="secondary" label="Buscar" icon="pi pi-search"></Button>
      </div>
    </div>
  </form>

  <!-- mensaje de error y boton para eliminar la busqueda -->
  <div v-if="errorMessage" class="error-message">
    <p>{{ errorMessage }}</p>
    <Button @click="resetSearch" severity="secondary" label="Eliminar búsqueda" />
  </div><br>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useFetch } from '#app'

  interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    overview: string;
    vote_average: number;
  }

  interface ApiResponse {
    results: Movie[];
  }

  const value = ref('')
  const errorMessage = ref('')

  const emit = defineEmits(['search'])

  const searchMovies = async () => {
    if (value.value.trim()) {
      const { data, error } = await useFetch<ApiResponse>(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          query: value.value,
          api_key: useRuntimeConfig().public.tmdbApiKey
        }
      })

      if (!error.value && data.value) {
        if (data.value.results.length === 0) {
          errorMessage.value = `La película "${value.value}" no se encuentra disponible.`
        } else {
          emit('search', data.value.results)
          errorMessage.value = ''
        }
      } else {
        console.error("Error fetching movies:", error.value)
        errorMessage.value = 'Hubo un error al buscar las películas.'
      }
    }
  }

  const resetSearch = () => {
    value.value = ''
    errorMessage.value = ''
  }
</script>

<style scoped>
  .c-flex {
    display: flex;
    justify-content: end;
  }

  .input {
    margin-right: 10px;
  }

  .error-message {
    margin-top: 1rem;
    color: #999999;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: xx-large;
    text-align: center;
    font-family: sans-serif;
  }
</style>