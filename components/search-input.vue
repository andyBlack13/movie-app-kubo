<template>
  <form @submit.prevent="searchMovies">
    <div class="flex card">
      <div class="c-flex flex-col gap-2">
        <InputText 
          ref="searchInput" 
          class="input" 
          id="search" 
          v-model="value" 
          placeholder="Buscar película..." 
        />
        <Button v-if="value != ''" @click="resetSearch" severity="secondary" class="button-delete">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6L18 18" stroke="#121212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </Button>
        <Button type="submit" severity="secondary" label="Buscar" icon="pi pi-search" />
      </div>
    </div>
  </form>

  <!-- mensaje de error y boton para eliminar la busqueda -->
  <div v-if="errorMessage" class="error-message">
    <p>{{ errorMessage }}</p>
    <Button @click="resetSearch" severity="secondary" label="Eliminar búsqueda" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
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
const searchInput = ref<HTMLInputElement | null>(null)

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

// reestablecer la busqueda inicial
const resetSearch = async () => {
  value.value = ''
  errorMessage.value = ''
  
  // ejecutar
  await fetchAllMovies()
}

// get peliculas
const fetchAllMovies = async () => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${useRuntimeConfig().public.tmdbApiKey}&language=en-US`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    emit('search', data.results || [])
  } catch (error) {
    console.error('Error fetching movies:', error)
  }
}

watch(value, (newValue) => {
  if (newValue.trim() === '') {
    resetSearch()
  }
})

onMounted(() => {
  fetchAllMovies()
})
</script>

<style scoped>
  .c-flex {
    display: flex;
    justify-content: end;
  }

  .input {
    margin-right: 10px;
    font-family: 'Roboto';
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

  .button-delete {
    margin-right: 10px;
    font-family: 'Roboto';
    background-color: #b10000;
    border: 1px solid #b10000;
  }
</style>
