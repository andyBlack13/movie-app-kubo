<template>
  <div>
    <MovieDetail v-if="movie" :movie="movie" />
    <DetailMovie v-else/>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import MovieDetail from '~/components/movie-detail.vue';
  import { useFetch } from '#app';
  import type { IMovieDetail } from '~/interfaces/IMovieDetail';
  import DetailMovie from '~/components/skeleton-loaders/detail-movie.vue';

  const route = useRoute();
  const movie = ref<IMovieDetail | null>(null);
  const apiKey = useRuntimeConfig().public.tmdbApiKey;

  const fetchMovieDetails = async (id: number) => {
    const { data, error } = await useFetch<IMovieDetail>(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`);
    if (error.value) {
      console.error('Error fetching movie details:', error.value);
      return;
    }
    movie.value = data.value;
  };

  onMounted(() => {
    const id = parseInt(route.params.id as string, 10);
    console.log('ID de película:', id);
    if (id) {
      fetchMovieDetails(id);
    }
  });
</script>