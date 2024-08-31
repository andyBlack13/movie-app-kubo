<template>
    <div>
         <!-- componente input busqueda -->
        <SearchInput @search="handleSearch" />

        <!-- pasar resutados de busqueda a componente lista -->
        <MoviesList :movies="searchResults" />
    </div>
</template>

<script setup lang="ts">
    import SearchInput from '~/components/search-input.vue'
    import MoviesList from '~/components/movies-list.vue'
    import { ref, onMounted } from 'vue'
    import { useRuntimeConfig } from '#app'

    interface Movie {
        id: number;
        title: string;
        poster_path: string;
        release_date: string;
        overview: string;
        vote_average: number;
    }

    const searchResults = ref<Movie[]>([])
    const apiKey = useRuntimeConfig().public.tmdbApiKey

    //  obtener todas las moviess inicialmente
    const fetchAllMovies = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            searchResults.value = data.results || []
        } catch (error) {
            console.error('Error fetching movies:', error)
        }
    }

    // cargar todas las peliculas cuando el componente esta listo
    onMounted(() => {
        fetchAllMovies()
    })

    //  manipulación de la búsqueda
    const handleSearch = (results: Movie[]) => {
        searchResults.value = results
    }
</script>